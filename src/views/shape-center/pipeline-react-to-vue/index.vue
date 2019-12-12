<template>
  <div class="PipelineGraph-container">
    <!-- <PipelineGraph
      stages="{graphNodes}"
      selectedStage="{selectedStage}"
      onNodeClick="{this.graphNodeClicked}"
    />-->
    <pipeline-graph
      v-if="a.length>0"
      :stages="a"
      :selectedStage="selectedStage"
      @onNodeClick="nodeclick"
    ></pipeline-graph>
  </div>
</template>

<script>
import "./main.css";
import PipelineGraph from "./PipelineGraph";
export default {
  components: {
    PipelineGraph
  },
  data() {
    return {
      a: [],
      selectedStage: "",
      d: {
        code: "0",
        data: [
          {
            _class: "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl",
            _links: {
              self: {
                _class: "io.jenkins.blueocean.rest.hal.Link",
                href:
                  "/blue/rest/organizations/jenkins/pipelines/admin_demoxp/runs/2/nodes/8/"
              },
              actions: {
                _class: "io.jenkins.blueocean.rest.hal.Link",
                href:
                  "/blue/rest/organizations/jenkins/pipelines/admin_demoxp/runs/2/nodes/8/actions/"
              },
              steps: {
                _class: "io.jenkins.blueocean.rest.hal.Link",
                href:
                  "/blue/rest/organizations/jenkins/pipelines/admin_demoxp/runs/2/nodes/8/steps/"
              }
            },
            actions: [],
            displayDescription: null,
            displayName: "获取源码",
            durationInMillis: 205,
            id: "8",
            input: null,
            result: "FAILURE",
            startTime: "2019-11-22T17:51:16.849+0800",
            state: "FINISHED",
            type: "STAGE",
            causeOfBlockage: null,
            edges: [],
            firstParent: null,
            restartable: false
          }
        ],
        msg: "操作成功"
      }
    };
  },
  methods: {
    nodeclick() {},
    badNode(jenkinsNode) {
      // eslint-disable-next-line
      console.error("Malformed / missing Jenkins run node:", jenkinsNode);
      return new Error(
        "convertJenkinsNodeDetails: malformed / missing Jenkins run node."
      );
    },

    convertJenkinsNodeDetails(jenkinsNode, isCompleted, skewMillis = 0) {
      if (!jenkinsNode || !jenkinsNode.id) {
        throw this.badNode(jenkinsNode);
      }
      // logger.debug('jenkinsNode', jenkinsNode);
      const isRunning = () => {
        switch (jenkinsNode.state) {
          case "RUNNING":
          case "PAUSED":
          case "QUEUED":
            return true;
          default:
            return false;
        }
      };

      const { durationInMillis, startTime } = jenkinsNode;
      // const timeManager = new TimeManager();
      // we need to make sure that we calculate with the correct time offset
      // const harmonized = timeManager.harmonizeTimes(
      //   {
      //     isRunning: isRunning(),
      //     durationInMillis,
      //     startTime
      //   },
      //   skewMillis
      // );
      let completePercent = 0;
      let state = "unknown";

      if (jenkinsNode.result === "SUCCESS") {
        state = "success";
        completePercent = 100;
      } else if (jenkinsNode.result === "FAILURE") {
        state = "failure";
        completePercent = 100;
      } else if (jenkinsNode.state === "PAUSED") {
        state = "paused";
        completePercent = 100;
      } else if (jenkinsNode.result === "UNSTABLE") {
        state = "unstable";
        completePercent = 100;
      } else if (jenkinsNode.result === "ABORTED") {
        state = "aborted";
        completePercent = 100;
      } else if (jenkinsNode.state === "SKIPPED") {
        state = "skipped";
        completePercent = 0;
      } else if (jenkinsNode.state === "RUNNING") {
        state = "running";
        completePercent = 50;
      } else if (
        jenkinsNode.state === "QUEUED" ||
        (jenkinsNode.state === null && !isCompleted)
      ) {
        state = "queued";
        completePercent = 0;
      } else if (
        jenkinsNode.state === "NOT_BUILT" ||
        jenkinsNode.state == null
      ) {
        state = "not_built";
        completePercent = 0;
      }
      // const i18nDuration = timeManager.format(
      //     harmonized.durationInMillis,
      //     translate('common.date.duration.hint.format', { defaultValue: 'M [month], d [days], h[h], m[m], s[s]' })
      // );

      // const title = state === 'running' ? '' : translate(`common.state.${state}`, { 0: i18nDuration });
      const title = state === "running" ? "" : `common.state.${state}`;

      const converted = {
        name: jenkinsNode.displayName,
        children: [],
        state,
        completePercent,
        id: jenkinsNode.id,
        title,
        type: jenkinsNode.type
      };
      // logger.debug('converted node', converted);
      return converted;
    },
    convertJenkinsNodeGraph(jenkinsGraph, isCompleted, skewMillis) {
      if (!jenkinsGraph || !jenkinsGraph.length) {
        return [];
      }

      const results = [];
      const originalNodeForId = {};
      const convertedNodeForId = {};
      const allEdges = []; // Array of [srcId, destId] pairs
      const edgeCountToNode = {}; // id => int
      // const edgeCountFromNode = {}; // id => int
      let firstNode = undefined;

      // Convert the basic details of nodes, and index them by id
      jenkinsGraph.forEach(jenkinsNode => {
        const convertedNode = this.convertJenkinsNodeDetails(
          jenkinsNode,
          isCompleted,
          skewMillis
        );
        const { id } = convertedNode;

        firstNode = firstNode || convertedNode;
        convertedNodeForId[id] = convertedNode;
        originalNodeForId[id] = jenkinsNode;
        edgeCountToNode[id] = 0;
        // edgeCountFromNode[id] = 0;

        for (const edge of jenkinsNode.edges) {
          allEdges.push([id, edge.id]);
        }
      });

      // Filter out any edges to missing nodes
      allEdges.filter(
        ([src, dest]) => src in convertedNodeForId && dest in convertedNodeForId
      );

      // Count edges going to/from each node.
      for (const edgePair of allEdges) {
        const dest = edgePair[1];
        edgeCountToNode[dest] = edgeCountToNode[dest] + 1;
      }

      // Follow the graph and build our results
      let currentNode = firstNode;
      while (currentNode) {
        results.push(currentNode);

        let nextNode = null;
        const originalNode = originalNodeForId[currentNode.id];
        const edges = originalNode.edges || [];
        let parallelNodes = [];
        if (edges.length > 0) {
          parallelNodes = edges.filter(edge => edge.type === "PARALLEL");
        }

        if (edges.length === 1 && parallelNodes.length === 0) {
          // Single following (sibling) node
          nextNode = convertedNodeForId[edges[0].id];
        } else if (parallelNodes.length > 0) {
          // Multiple following nodes are child nodes (parallel branch) not siblings

          // Put the first node of each branch into the children
          currentNode.children = parallelNodes
            .map(edge => convertedNodeForId[edge.id])
            .filter(node => !!node);

          // Now follow the edges along until they coalesce again, which will be the next top-level stage
          let branchNodes = currentNode.children;

          while (branchNodes && branchNodes.length > 0) {
            const nextBranchNodes = [];

            for (const branchNode of branchNodes) {
              const branchNodeEdges =
                originalNodeForId[branchNode.id].edges || [];
              if (branchNodeEdges.length > 0) {
                // Should only be 0 at end of pipeline or bad input data
                const followingNode = convertedNodeForId[branchNodeEdges[0].id];

                // If followingNode has several edges pointing to it....

                if (branchNodeEdges[0].type === "STAGE") {
                  // ... then it's the next top-level stage so we're done following this parallel branch...
                  nextNode = followingNode;
                } else {
                  // ... otherwise it's the next sibling stage within this parallel branch.
                  branchNode.nextSibling = followingNode;
                  nextBranchNodes.push(followingNode);
                }
              }
            }

            branchNodes = nextBranchNodes;
          }
        }

        currentNode = nextNode;
      }

      return results;
    }
  },
  mounted() {
    this.a = this.convertJenkinsNodeGraph(this.d.data);
    console.log("=a=", this.a);
    this.selectedStage = this.a[0];
  }
};
</script>
<style scoped>
</style>