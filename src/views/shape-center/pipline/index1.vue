<template>
  <div id="container">
    <div class="title">Vue G6</div>
    <i class="el-icon-success"></i>
    <i class="el-icon-error"></i>
    
    <i class="el-icon-loading"></i>

    <div id="mountNode"></div>
  </div>
</template>

<script>
import G6 from "@antv/g6";
import dagre from "dagre";
export default {
  name: "minimap",
  data() {
    return {
      graph: null,
      arr: [
        {
          displayName: "6",
          durationInMillis: 48,
          edges: [
            {
              _class:
                "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
              id: "12",
              type: "STAGE"
            }
          ],
          id: "6",
          restartable: true,
          result: "SUCCESS",
          startTime: "2019-10-08T10:47:03.954+0800",
          state: "FINISHED",
          type: "STAGE"
        },
        {
          displayName: "12",
          durationInMillis: 273,
          edges: [
            {
              _class:
                "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
              id: "40",
              type: "PARALLEL"
            },
            {
              _class:
                "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
              id: "41",
              type: "PARALLEL"
            }
          ],
          id: "12",
          restartable: true,
          result: "SUCCESS",
          startTime: "2019-10-08T10:47:04.591+0800",
          state: "FINISHED",
          type: "STAGE"
        },
        {
          displayName: "40",
          durationInMillis: 27,
          edges: [
            {
              _class:
                "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
              id: "50",
              type: "STAGE"
            }
          ],
          firstParent: "12",
          id: "40",
          restartable: false,
          result: "SUCCESS",
          startTime: "2019-10-08T10:47:03.975+0800",
          state: "FINISHED",
          type: "PARALLEL"
        },
        {
          displayName: "41",
          durationInMillis: 27,
          edges: [
            {
              _class:
                "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
              id: "50",
              type: "STAGE"
            }
          ],
          firstParent: "6",
          id: "41",
          restartable: false,
          result: "SUCCESS",
          startTime: "2019-10-08T10:47:03.975+0800",
          state: "FINISHED",
          type: "PARALLEL"
        },
        {
          displayName: "50",
          durationInMillis: 27,
          edges: [],
          firstParent: "6",
          id: "50",
          restartable: false,
          result: "SUCCESS",
          startTime: "2019-10-08T10:47:03.975+0800",
          state: "FINISHED",
          type: "STAGE"
        }
      ],

      // arr: [
      //   {
      //     displayName: "6",
      //     durationInMillis: 48,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "12",
      //         type: "STAGE"
      //       }
      //     ],
      //     id: "6",
      //     restartable: true,
      //     result: "SUCCESS",
      //     startTime: "2019-10-08T10:47:03.954+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   },
      //   {
      //     displayName: "12",
      //     durationInMillis: 48,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "14",
      //         type: "STAGE"
      //       }
      //     ],
      //     id: "12",
      //     restartable: true,
      //     result: "SUCCESS",
      //     startTime: "2019-10-08T10:47:03.954+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   },
      //   {
      //     displayName: "14",
      //     durationInMillis: 48,
      //     edges: [
      //     ],
      //     id: "14",
      //     restartable: true,
      //     result: "SUCCESS",
      //     startTime: "2019-10-08T10:47:03.954+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   },
      // ],

      // arr: [
      //   {
      //     displayName: "6",
      //     durationInMillis: 48,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "12",
      //         type: "STAGE"
      //       }
      //     ],
      //     id: "6",
      //     restartable: true,
      //     result: "SUCCESS",
      //     startTime: "2019-10-08T10:47:03.954+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   },
      //   {
      //     displayName: "12",
      //     durationInMillis: 273,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "40",
      //         type: "PARALLEL"
      //       },
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "41",
      //         type: "PARALLEL"
      //       }
      //     ],
      //     id: "12",
      //     restartable: true,
      //     result: "SUCCESS",
      //     startTime: "2019-10-08T10:47:04.591+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   },
      //   {
      //     displayName: "40",
      //     durationInMillis: 27,
      //     edges: [],
      //     firstParent: "12",
      //     id: "40",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-08T10:47:03.975+0800",
      //     state: "FINISHED",
      //     type: "PARALLEL"
      //   },
      //   {
      //     displayName: "41",
      //     durationInMillis: 27,
      //     edges: [],
      //     firstParent: "6",
      //     id: "41",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-08T10:47:03.975+0800",
      //     state: "FINISHED",
      //     type: "PARALLEL"
      //   }
      // ],

      // arr: [
      //   {
      //     _class: "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl",
      //     _links: {
      //       actions: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/8/actions/"
      //       },
      //       self: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/8/"
      //       },
      //       steps: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/8/steps/"
      //       }
      //     },
      //     actions: [],
      //     displayName: "Tests In Parallel",
      //     durationInMillis: 2463,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "11",
      //         type: "PARALLEL"
      //       },
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "12",
      //         type: "PARALLEL"
      //       }
      //     ],
      //     id: "8",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-09T14:07:35.522+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   },
      //   {
      //     _class: "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl",
      //     _links: {
      //       actions: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/11/actions/"
      //       },
      //       self: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/11/"
      //       },
      //       steps: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/11/steps/"
      //       }
      //     },
      //     actions: [],
      //     displayName: "代码下载",
      //     durationInMillis: 2457,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "29",
      //         type: "STAGE"
      //       }
      //     ],
      //     firstParent: "8",
      //     id: "11",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-09T14:07:35.528+0800",
      //     state: "FINISHED",
      //     type: "PARALLEL"
      //   },
      //   {
      //     _class: "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl",
      //     _links: {
      //       actions: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/12/actions/"
      //       },
      //       self: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/12/"
      //       },
      //       steps: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/12/steps/"
      //       }
      //     },
      //     actions: [],
      //     displayName: "代码测试",
      //     durationInMillis: 2456,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "29",
      //         type: "STAGE"
      //       }
      //     ],
      //     firstParent: "8",
      //     id: "12",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-09T14:07:35.529+0800",
      //     state: "FINISHED",
      //     type: "PARALLEL"
      //   },
      //   {
      //     _class: "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl",
      //     _links: {
      //       actions: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/29/actions/"
      //       },
      //       self: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/29/"
      //       },
      //       steps: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/29/steps/"
      //       }
      //     },
      //     actions: [],
      //     displayName: "gradle构建项目",
      //     durationInMillis: 2168,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "38",
      //         type: "STAGE"
      //       }
      //     ],
      //     id: "29",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-09T14:07:38.104+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   },
      //   {
      //     _class: "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl",
      //     _links: {
      //       actions: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/38/actions/"
      //       },
      //       self: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/38/"
      //       },
      //       steps: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/38/steps/"
      //       }
      //     },
      //     actions: [],
      //     displayName: "docker 构建",
      //     durationInMillis: 493,
      //     edges: [],
      //     firstParent: "29",
      //     id: "38",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-09T14:07:40.340+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   }
      // ],

      // arr: [
      //   {
      //     _class: "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl",
      //     _links: {
      //       actions: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/8/actions/"
      //       },
      //       self: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/8/"
      //       },
      //       steps: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/8/steps/"
      //       }
      //     },
      //     actions: [],
      //     displayName: "Tests In Parallel",
      //     durationInMillis: 2463,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "11",
      //         type: "PARALLEL"
      //       },
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "12",
      //         type: "PARALLEL"
      //       }
      //     ],
      //     id: "8",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-09T14:07:35.522+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   },
      //   {
      //     _class: "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl",
      //     _links: {
      //       actions: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/11/actions/"
      //       },
      //       self: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/11/"
      //       },
      //       steps: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/11/steps/"
      //       }
      //     },
      //     actions: [],
      //     displayName: "代码下载",
      //     durationInMillis: 2457,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "29",
      //         type: "STAGE"
      //       }
      //     ],
      //     firstParent: "8",
      //     id: "11",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-09T14:07:35.528+0800",
      //     state: "FINISHED",
      //     type: "PARALLEL"
      //   },
      //   {
      //     _class: "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl",
      //     _links: {
      //       actions: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/12/actions/"
      //       },
      //       self: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/12/"
      //       },
      //       steps: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/12/steps/"
      //       }
      //     },
      //     actions: [],
      //     displayName: "代码测试",
      //     durationInMillis: 2456,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "29",
      //         type: "STAGE"
      //       }
      //     ],
      //     firstParent: "8",
      //     id: "12",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-09T14:07:35.529+0800",
      //     state: "FINISHED",
      //     type: "PARALLEL"
      //   },
      //   {
      //     _class: "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl",
      //     _links: {
      //       actions: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/29/actions/"
      //       },
      //       self: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/29/"
      //       },
      //       steps: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/29/steps/"
      //       }
      //     },
      //     actions: [],
      //     displayName: "gradle构建项目",
      //     durationInMillis: 2168,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "38",
      //         type: "STAGE"
      //       }
      //     ],
      //     id: "29",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-09T14:07:38.104+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   },
      //   {
      //     _class: "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl",
      //     _links: {
      //       actions: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/38/actions/"
      //       },
      //       self: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/38/"
      //       },
      //       steps: {
      //         _class: "io.jenkins.blueocean.rest.hal.Link",
      //         href:
      //           "/blue/rest/organizations/jenkins/pipelines/default-demo03/runs/8/nodes/38/steps/"
      //       }
      //     },
      //     actions: [],
      //     displayName: "docker 构建",
      //     durationInMillis: 493,
      //     edges: [],
      //     firstParent: "29",
      //     id: "38",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-09T14:07:40.340+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   }
      // ],

      // arr: [
      //   {
      //     displayName: "Build",
      //     durationInMillis: 48,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "10",
      //         type: "PARALLEL"
      //       },
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "11",
      //         type: "PARALLEL"
      //       },
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "12",
      //         type: "PARALLEL"
      //       }
      //     ],
      //     id: "6",
      //     restartable: true,
      //     result: "SUCCESS",
      //     startTime: "2019-10-08T10:47:03.954+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   },
      //   {
      //     displayName: "Build:Module1",
      //     durationInMillis: 32,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "35",
      //         type: "STAGE"
      //       }
      //     ],
      //     firstParent: "6",
      //     id: "10",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-08T10:47:03.970+0800",
      //     state: "FINISHED",
      //     type: "PARALLEL"
      //   },
      //   {
      //     displayName: "Build:Module2",
      //     durationInMillis: 30,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "35",
      //         type: "STAGE"
      //       }
      //     ],
      //     firstParent: "6",
      //     id: "11",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-08T10:47:03.972+0800",
      //     state: "FINISHED",
      //     type: "PARALLEL"
      //   },
      //   {
      //     displayName: "Build:Module3",
      //     durationInMillis: 27,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "35",
      //         type: "STAGE"
      //       }
      //     ],
      //     firstParent: "6",
      //     id: "12",
      //     restartable: false,
      //     result: "SUCCESS",
      //     startTime: "2019-10-08T10:47:03.975+0800",
      //     state: "FINISHED",
      //     type: "PARALLEL"
      //   },
      //   {
      //     displayName: "Test",
      //     durationInMillis: 273,
      //     edges: [
      //       {
      //         _class:
      //           "io.jenkins.blueocean.rest.impl.pipeline.PipelineNodeImpl$EdgeImpl",
      //         id: "40",
      //         type: "STAGE"
      //       }
      //     ],
      //     id: "35",
      //     restartable: true,
      //     result: "SUCCESS",
      //     startTime: "2019-10-08T10:47:04.591+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   },
      //   {
      //     displayName: "Deploy",
      //     durationInMillis: 284,
      //     edges: [],
      //     firstParent: "35",
      //     id: "40",
      //     restartable: true,
      //     result: "SUCCESS",
      //     startTime: "2019-10-08T10:47:04.899+0800",
      //     state: "FINISHED",
      //     type: "STAGE"
      //   }
      // ],
      data: {
        nodes: [
          
        ],
        edges: []
      }
    };
  },
  methods: {
    datahandle() {
      this.data.nodes.push(
        {
            id: "0",
            label: "start",
            type: "begin",
            shape:'circle',
            fill:'#ccc'
          }
      )
      
      this.arr.forEach((item, index) => {
        this.data.nodes.push({
          id: item.id,
          label: item.displayName,
          state: item.state,
          result: item.result,
          img:"static/pipeline/success.png",
          shape:'image',
          size:20,
          
          clipCfg: {
            show: false,
            type: 'circle',
            // r: 20,
            width: 10, 
            height: 10
          },
          style: {
            cursor: 'pointer',
            fill:'blue',
            // width:'30',
            // height:'30',
            stroke: 'white',
            lineWidth: 5,
          },
          labelCfg: {
            position: 'bottom'
          }
        });

        //第一个
        if (index == 0 && item.edges.length > 0) {
          //主干
          if (item.edges[0].type == "STAGE") {
            this.data.edges.push({
              source: "0",
              target: item.id,
              shape: "cubic-horizontal"
            });
            this.data.edges.push({
              source: item.id,
              target: item.edges[0].id,
              shape: "cubic-horizontal"
            });
          } else {
            //分支
            this.data.nodes.pop();
            item.edges.forEach((edgeitem, index) => {
              this.data.edges.push({
                source: "0",
                target: edgeitem.id,
                shape: "cubic-horizontal"
              });
            });
          }
        } else if (item.edges.length > 0) {
          item.edges.forEach(edgeitem => {
            this.data.edges.push({
              source: item.id,
              target: edgeitem.id,
              shape: "cubic-horizontal"
            });
          });
        } else {
          this.data.edges.push({
            source: item.id,
            target: "end",
            shape: "cubic-horizontal"
          });
        }
      });
      this.data.nodes.push({
        id: "end",
        label: "end",
        type: "end",
        shape:'circle',
        fill:'#ccc'
      });
      return this.data;
    }
  },
  mounted() {
    // this.graph = new G6.Graph({
    //   container: 'mountNode',
    //   width: 500,
    //   height: 500
    // })
    // this.graph.read(this.graphData)

    var _extends =
      Object.assign ||
      function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };

    var nodeExtraAttrs = {
      begin: {
        fill: "#ccc"
      },
      end: {
        fill: "#ccc"
      }
    };
    let data = this.datahandle();
    console.log("data", data);

    // G6.registerNode(
    //   "node",
    //   {
    //     drawShape: function drawShape(cfg, group) {
    //       var rect = group.addShape("rect", {
    //         attrs: _extends(
    //           {
    //             // x: -25,
    //             // y: -25,
    //             x: -20,
    //             y: 10,
    //             width: 40,
    //             height: 40,
    //             radius: 20,
    //             fill: "#FFD591",
    //             fillOpacity: 1
    //           },
    //           nodeExtraAttrs[cfg.type]
    //         )
    //       });
    //       return rect;
    //     },
        
    //     getAnchorPoints: function getAnchorPoints() {
    //       // return [[0.5, 0], [0.5, 1]];
    //       return  [[0, 0.5], [1, 0.5]];
    //     }
    //   },
    //   "single-shape"
    // );

    // G6.registerNode('node', {
    //   getAnchorPoints: function getAnchorPoints() {
    //     return  [[0, 0.5], [1, 0.5]];
    //   }
    // }, "single-shape");

    G6.registerNode('custom', {
      // 设置状态
      setState(name, value, item) {
        const group = item.getContainer();
        const shape = group.get('children')[0]; // 顺序根据 draw 时确定
        if(name === 'selected') {
          if(value) {
            shape.attr('stroke', 'red');
          } else {
            shape.attr('stroke', 'white');
          }
        }
      }
    }, 'image');

    this.graph = new G6.Graph({
      container: "mountNode",
      width: 1000,
      height: 800,
      //   modes: {
      //     default: ['drag-canvas']
      //   },
      layout: {
        type: "dagre",
        rankdir: "LR", // 可选，默认为图的中心
        // align: 'UL',             // 可选'UL' | 'UR' | 'DL' | 'DR'
        nodesep: 20, // 可选
        ranksep: 25 // 可选
        // controlPoints: true      // 可选
      },
      // defaultNode: {
      //   shape: 'image'
      // },
      // defaultNode: {
      //   shape: "node",
      //   // icon: {
      //   //   show: true,
      //   //   width: 25,
      //   //   height: 25
      //   // },
      //   labelCfg: {
      //     style: {
      //       fill: "#000",
      //       fontSize: 14
      //     }
      //   }
      // },
      // defaultEdge: {
      //   shape: "line-with-arrow"
      // },
      edgeStyle: {
        default: {
          endArrow: true,
          lineWidth: 2,
          stroke: "#ccc"
        }
      }
    });

    this.graph.data(data);
    this.graph.render();

    this.graph.on("node:click", function(evt) {
      console.log("click", evt.item._cfg.id);
      // var target = evt.target;
      const node = evt.item;
      graph.setItemState(node, 'selected', !node.hasState('selected')); // 切换选中
      // var type = target.get("type");
      // if (type === "circle") {
      //   // 点击边上的circle
      //   alert("你点击的是边上的圆点");
      // }
    });
  }
};
</script>