<template>
  <div>
    <el-button size="small" type="primary" class="button">
      选取文件
      <input type="file" class="file" @change="getfilename" accept=".xls, .xlsx" />
    </el-button>
    <span>{{filename}}</span>
  </div>
</template>

<script>
import XLSX from "xlsx";
export default {
  data() {
    return {
      filename: ""
    };
  },
  methods: {
    getfilename(event) {
      console.log("==", event.target.files);
      const files = event.target.files[0];
      let self = this;
      this.filename = files.name;
      var reader = new FileReader();
      reader.onload = function(event) {
        var data = event.target.result;
        var workbook = XLSX.read(data, {
          type: "binary"
        });
        workbook.SheetNames.forEach(function(sheetName) {
          var XL_row_object = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheetName]
          );
          if (XL_row_object.length > 0) {
            console.log("====", JSON.stringify(XL_row_object));
            // document.getElementById("jsonObject").innerHTML = JSON.stringify(XL_row_object);
          }
        });
      };

      reader.onerror = function(event) {
        console.error(
          "File could not be read! Code " + event.target.error.code
        );
      };

      reader.readAsBinaryString(files);
    },
    //数据
    
  }
};
</script>

<style>
.button {
  position: relative;
}
.file {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  cursor: pointer;
}
</style>