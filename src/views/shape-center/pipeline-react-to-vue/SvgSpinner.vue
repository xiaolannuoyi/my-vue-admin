
<script>
const PipelineGraphModel_1 = require("./model.js");
const nodeStrokeWidth = 3.5
export default {
  data() {
    return {
        infiniteRotationRunning : false,
        infiniteRotateDegrees : 0,
        isEdgeOrIE : ('MSInputMethodContext' in window && 'documentMode' in document) || window.navigator.userAgent.indexOf('Edge') > -1,
        requestAnimationFrameId : 0, // Callback handle
        infiniteLoadingTimer :() => {
            this.infiniteRotateDegrees += 1.5;
            if (this.infiniteRotateDegrees >= 360) {
                this.infiniteRotateDegrees = 0;
            }
            this.animatedElement.setAttribute('transform', `rotate(${this.infiniteRotateDegrees})`);
            this.requestAnimationFrameId = requestAnimationFrame(this.infiniteLoadingTimer);
        }
    };
  },
  methods: {
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
      const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
      };
    },
    describeArcAsPath(x, y, radius, startAngle, endAngle) {
      const start = this.polarToCartesian(x, y, radius, endAngle);
      const end = this.polarToCartesian(x, y, radius, startAngle);
      const arcSweep = endAngle - startAngle <= 180 ? "0" : "1";
      const d = [
        "M",
        start.x,
        start.y,
        "A",
        radius,
        radius,
        0,
        arcSweep,
        0,
        end.x,
        end.y
      ].join(" ");
      return d;
    }
  },
  mounted() {},
  props:['result','percentage','radius'],
  render(h) {
    const { result } = this;
    const radius = this.radius || 12;
    const insideRadius = radius - 0.5 * nodeStrokeWidth; // No "inside" stroking in SVG
    let percentage = this.percentage;
    const groupClasses = ["PWGx-progress-spinner", result];
    if (result === PipelineGraphModel_1.Result.queued) {
      percentage = 0;
    } else if (
      typeof percentage !== "number" ||
      isNaN(percentage) ||
      percentage < 0
    ) {
      percentage = 0;
    } else if (percentage === 100) {
      groupClasses.push("pc-over-100");
      percentage = 0;
    } else if (percentage > 100) {
      groupClasses.push("spin");
      percentage = 25;
      if (!this.infiniteRotationRunning && this.isEdgeOrIE) {
        requestAnimationFrame(this.infiniteLoadingTimer);
        this.infiniteRotationRunning = true;
      }
    }
    const rotate = (percentage / 100) * 360;
    const d = describeArcAsPath(0, 0, insideRadius, 0, rotate);
    const innerRadius = insideRadius / 3;
    return (
      <g
        class={groupClasses.join(" ")}
        ref={c => (this.animatedElement = c)}
      >
        <circle
          cx="0"
          cy="0"
          r={radius}
          class="halo"
          strokeWidth={nodeStrokeWidth}
        />
        <circle
          cx="0"
          cy="0"
          r={insideRadius}
          class="statusColor"
          strokeWidth={nodeStrokeWidth}
        />
        <circle cx="0" cy="0" r={innerRadius} class="inner statusColor" />
        {percentage ? (
          <path
            class={result}
            fill="none"
            strokeWidth={nodeStrokeWidth}
            d={d}
          />
        ) : null}
      </g>
    );
  }
};
</script>
<style scoped>
</style>