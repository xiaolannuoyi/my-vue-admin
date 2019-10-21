<template>
  <div>
      <test :stepdata='arr' @clickstep="stepclick"></test>
  </div>
</template>

<script>
import test from './test'
export default {
    components:{test},
    data(){
      return {
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
      }
    },
    methods:{
      stepclick(id){
        console.log('id',id)
      }
    }
}
</script>

<style>

</style>