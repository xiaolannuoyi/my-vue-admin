/**
 * Main process for laying out the graph. Creates and positions markers for each component, but creates no components.
 *
 *  1. Creates nodes for each stage in the pipeline
 *  2. Position the nodes in columns for each top stage, and in rows within each column based on execution order
 *  3. Create all the connections between nodes that need to be rendered
 *  4. Create a bigLabel per column, and a smallLabel for any child nodes
 *  5. Measure the extents of the graph
 */
function layoutGraph(newStages, layout) {
    const stageNodeColumns = createNodeColumns(newStages);
    const { nodeSpacingH, ypStart } = layout;
    const startNode = {
        x: 0,
        y: 0,
        name: 'Start',
        id: -1,
        isPlaceholder: true,
        key: 'start-node',
        type: 'start',
    };
    const endNode = {
        x: 0,
        y: 0,
        name: 'End',
        id: -2,
        isPlaceholder: true,
        key: 'end-node',
        type: 'end',
    };
    const allNodeColumns = [
        { rows: [[startNode]], centerX: 0, hasBranchLabels: false, startX: 0 },
        ...stageNodeColumns,
        { rows: [[endNode]], centerX: 0, hasBranchLabels: false, startX: 0 },
    ];
    positionNodes(allNodeColumns, layout);
    const bigLabels = createBigLabels(allNodeColumns);
    const smallLabels = createSmallLabels(allNodeColumns);
    const branchLabels = createBranchLabels(allNodeColumns);
    const connections = createConnections(allNodeColumns);
    // Calculate the size of the graph
    let measuredWidth = 0;
    let measuredHeight = 200;
    for (const column of allNodeColumns) {
        for (const row of column.rows) {
            for (const node of row) {
                measuredWidth = Math.max(measuredWidth, node.x + nodeSpacingH / 2);
                measuredHeight = Math.max(measuredHeight, node.y + ypStart);
            }
        }
    }
    return {
        nodeColumns: allNodeColumns,
        connections,
        bigLabels,
        smallLabels,
        branchLabels,
        measuredWidth,
        measuredHeight,
    };
}
export default layoutGraph;
/**
 * Generate an array of columns, based on the top-level stages
 */
function createNodeColumns(topLevelStages = []) {
    const nodeColumns = [];
    for (const topStage of topLevelStages) {
        // If stage has children, we don't draw a node for it, just its children
        const stagesForColumn = topStage.children && topStage.children.length ? topStage.children : [topStage];
        const column = {
            topStage,
            rows: [],
            centerX: 0,
            startX: 0,
            hasBranchLabels: false,
        };
        for (const firstStageForRow of stagesForColumn) {
            const rowNodes = [];
            let nodeStage = firstStageForRow;
            while (nodeStage) {
                if (nodeStage.seqContainerName) {
                    column.hasBranchLabels = true;
                }
                rowNodes.push({
                    x: 0,
                    y: 0,
                    name: nodeStage.name,
                    id: nodeStage.id,
                    stage: nodeStage,
                    isPlaceholder: false,
                    key: 'n_' + nodeStage.id,
                });
                nodeStage = nodeStage.nextSibling;
            }
            column.rows.push(rowNodes);
        }
        nodeColumns.push(column);
    }
    return nodeColumns;
}
/**
 * Walks the columns of nodes giving them x and y positions. Mutates the node objects in place for now.
 */
function positionNodes(nodeColumns, { nodeSpacingH, parallelSpacingH, nodeSpacingV, ypStart }) {
    let xp = nodeSpacingH / 2;
    let previousTopNode;
    for (const column of nodeColumns) {
        const topNode = column.rows[0][0];
        let yp = ypStart; // Reset Y to top for each column
        if (previousTopNode) {
            // Advance X position
            if (previousTopNode.isPlaceholder || topNode.isPlaceholder) {
                // Don't space placeholder nodes (start/end) as wide as normal.
                xp += Math.floor(nodeSpacingH * 0.7);
            }
            else {
                xp += nodeSpacingH;
            }
        }
        let widestRow = 0;
        for (const row of column.rows) {
            widestRow = Math.max(widestRow, row.length);
        }
        const xpStart = xp; // Remember the left-most position in this column
        // Make room for row labels
        if (column.hasBranchLabels) {
            xp += exports.sequentialStagesLabelOffset;
        }
        let maxX = xp;
        for (const row of column.rows) {
            let nodeX = xp; // Start nodes at current column xp (not xpstart as that includes branch label)
            // Offset the beginning of narrower rows towards column center
            nodeX += Math.round((widestRow - row.length) * parallelSpacingH * 0.5);
            for (const node of row) {
                maxX = Math.max(maxX, nodeX);
                node.x = nodeX;
                node.y = yp;
                nodeX += parallelSpacingH; // Space out nodes in each row
            }
            yp += nodeSpacingV; // LF
        }
        column.centerX = Math.round((xpStart + maxX) / 2);
        column.startX = xpStart; // Record on column for use later to position branch labels
        xp = maxX; // Make sure we're at the end of the widest row for this column before next loop
        previousTopNode = topNode;
    }
}
/**
 * Generate label descriptions for big labels at the top of each column
 */
function createBigLabels(columns) {
    const labels = [];
    for (const column of columns) {
        const node = column.rows[0][0];
        const stage = column.topStage;
        const text = stage ? stage.name : node.name;
        const key = 'l_b_' + node.key;
        // bigLabel is located above center of column, but offset if there's branch labels
        let x = column.centerX;
        if (column.hasBranchLabels) {
            x += Math.floor(exports.sequentialStagesLabelOffset / 2);
        }
        labels.push({
            x,
            y: node.y,
            node,
            stage,
            text,
            key,
        });
    }
    return labels;
}
/**
 * Generate label descriptions for small labels under the nodes
 */
function createSmallLabels(columns) {
    const labels = [];
    for (const column of columns) {
        for (const row of column.rows) {
            for (const node of row) {
                // We add small labels to parallel nodes only so skip others
                if (node.isPlaceholder || node.stage === column.topStage) {
                    continue;
                }
                const label = {
                    x: node.x,
                    y: node.y,
                    text: node.name,
                    key: 'l_s_' + node.key,
                    node,
                };
                if (node.isPlaceholder === false) {
                    label.stage = node.stage;
                }
                labels.push(label);
            }
        }
    }
    return labels;
}
/**
 * Generate label descriptions for named sequential parallels
 */
function createBranchLabels(columns) {
    const labels = [];
    let count = 0;
    for (const column of columns) {
        if (column.hasBranchLabels) {
            for (const row of column.rows) {
                const firstNode = row[0];
                if (!firstNode.isPlaceholder && firstNode.stage.seqContainerName) {
                    labels.push({
                        x: column.startX,
                        y: firstNode.y,
                        key: `branchLabel-${++count}`,
                        node: firstNode,
                        text: firstNode.stage.seqContainerName,
                    });
                }
            }
        }
    }
    return labels;
}
/**
 * Generate connection information from column to column
 */
function createConnections(columns) {
    const connections = [];
    let sourceNodes = [];
    let skippedNodes = [];
    for (const column of columns) {
        if (column.topStage && column.topStage.state === 'skipped') {
            skippedNodes.push(column.rows[0][0]);
            continue;
        }
        // Connections to each row in this column
        if (sourceNodes.length) {
            connections.push({
                sourceNodes,
                destinationNodes: column.rows.map(row => row[0]),
                skippedNodes: skippedNodes,
                hasBranchLabels: column.hasBranchLabels,
            });
        }
        // Simple horizontal connections between nodes within each row
        for (const row of column.rows) {
            for (let i = 0; i < row.length - 1; i++) {
                connections.push({
                    sourceNodes: [row[i]],
                    destinationNodes: [row[i + 1]],
                    skippedNodes: [],
                    hasBranchLabels: false,
                });
            }
        }
        sourceNodes = column.rows.map(row => row[row.length - 1]); // Last node of each row
        skippedNodes = [];
    }
    return connections;
}
