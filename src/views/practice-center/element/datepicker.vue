<template>
  <div>
      <el-form :model="form" :rules="rules" ref="form" label-position="top">
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-form-item prop="Starttime">
            <el-date-picker
              type="date"
              placeholder="开始时间"
              v-model="form.Starttime"
              style="width: 100%;"
              :picker-options="pickerOptionsStart"
              @change="changeEnd"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">~</el-col>
        <el-col :span="11">
          <el-form-item prop="endtime">
            <el-date-picker
              type="date"
              placeholder="结束时间"
              v-model="form.endtime"
              style="width: 100%;"
              :picker-options="pickerOptionsEnd"
              @change="changeStart"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        form: {
        Starttime: "",
        endtime: ""
      },rules: {
      },
      pickerOptionsStart: {},
      pickerOptionsEnd: {},
    }
  },
  methods: {
      changeStart() {
      this.pickerOptionsStart = Object.assign({}, this.pickerOptionsStart, {
        disabledDate: time => {
          return time.getTime() > this.form.endtime;
        }
      });
    },
    changeEnd() {
      this.pickerOptionsEnd = Object.assign({}, this.pickerOptionsEnd, {
        disabledDate: time => {
          return time.getTime() < this.form.Starttime;
        }
      });
    },
  },
  mounted() {

  }
}

</script>
<style scoped>
.line {
  text-align: center;
}
</style>