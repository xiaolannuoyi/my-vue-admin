<script>
const PipelineGraphModel_1 = require("./model.js");
import svgSpinner from "./SvgSpinner";
import svgStatus from "./SvgStatus";
export const nodeStrokeWidth = 3.5; // px.
export default {
  data() {
    return {};
  },
  components: {
    svgSpinner,
    svgStatus
  },
  methods: {
    badResult(x) {
      console.error("Unexpected Result value", x);
    }
  },
  mounted() {
    console.log("this.radius", this.radius);
  },
  props: ["result", "percentage", "radius"],
  render(h) {
    // Returns the correct <g> element for the result / progress percent.
    const { radius, result, percentage } = this;
    switch (this.result) {
      case PipelineGraphModel_1.Result.running:
      case PipelineGraphModel_1.Result.queued:
        return (
          <svg-spinner radius={radius} result={result} percentage={percentage} />
        );
      case PipelineGraphModel_1.Result.not_built:
      case PipelineGraphModel_1.Result.skipped:
      case PipelineGraphModel_1.Result.success:
      case PipelineGraphModel_1.Result.failure:
      case PipelineGraphModel_1.Result.paused:
      case PipelineGraphModel_1.Result.unstable:
      case PipelineGraphModel_1.Result.aborted:
      case PipelineGraphModel_1.Result.unknown:
        return <svg-status radius={radius} result={result}></svg-status>;
      default:
        badResult(result);
        return (
          <svg-status
            radius={radius}
            result={PipelineGraphModel_1.Result.unknown}
          />
        );
    }
  }
};
</script>
<style scoped>
</style>