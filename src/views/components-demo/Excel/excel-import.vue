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
            // console.log("====", JSON.stringify(XL_row_object));
            let arr = Array.from(XL_row_object)
            // console.log('arr',arr)
            self.tojson(arr)
            // document.getElementById("jsonObject").innerHTML = JSON.stringify(XL_row_object);
          }
        },self);

      };

      reader.onerror = function(event) {
        console.error(
          "File could not be read! Code " + event.target.error.code
        );
      };

      reader.readAsBinaryString(files);
    },
    //数据
    tojson(data){
      // console.log('datas',data)
      let result = []
      for(let item of data){
        let ports = []
        for(let key in item){
          if(/port/.test(key)){
            ports.push(this.toobj(item[key]))
          }
        }
        result.push({
          events:this.toarr(item.events),
          gatherLogs: this.toarr(item.gatherLogs),
          imageResourceType: item.imageResourceType,
          labels: this.toobj(item.labels),
          limit: this.toobj(item.limit),
          log_config: item.log_config,
          name: item.name,
          namespace: item.namespace,
          podAffinity: this.toobj(item.podAffinity),
          priorityclassesName: item.priorityclassesName,
          replicas: item.replicas,
          template:[
            {
              env: this.toobj(item.env),
              historyImages: this.toobj(item.historyImages),
              image: item.image,
              lifecycle: this.toobj(item.lifecycle),
              limits: this.toobj(item.limits),
              livenessProbe:  this.toobj(item.livenessProbe),
              nodeSelector: this.toarr(item.events),
              ports: ports,
              proptemplate: this.toobj(item.proptemplate),
              readinessProbe: this.toobj(item.readinessProbe),
              requests: this.toobj(item.requests),
              volumeMap: this.toobj(item.volumeMap)
            }
          ]
        })
      }
      console.log('---',result);
      
      return result;

    },
    toarr(str){
      if(str.length==0){
        return []
      }else{
        return str.split("\n");
      }
    },
    toobj(str){
      if(str.length===0){
        return {}
      }else{
        let a = str.split("\n");
        let result = {};
        for(let item of a){
          let i = item.indexOf(':');
          result[item.slice(0,i)] = item.slice(i+1)
        }
        return result
      }
        
    }
    
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