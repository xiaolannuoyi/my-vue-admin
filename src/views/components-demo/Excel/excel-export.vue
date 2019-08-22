<template>
  <div>
    <el-button type="primary" @click="exportfun">导出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // theader:["name","age"],
      theader: ["labels", "limit", "name", "namespace", "podAffinity"],
      arr: [
        // {
        //   name: "刘一",
        //   age: "20 \n33"
        // },
        // {
        //   name: "刘一",
        //   age: "20 \n33"
        // },
        // {
        //   name: "刘一",
        //   age: 20
        // },

        {
          events: [],
          gatherLogs: [],
          imageResourceType: 0,
          labels: {
            "agree-app-name": "gxz2",
            "agree-app-type": "agree-application",
            "agree-app-version": "0fee8542-ae33-49aa-a5b6-78b06f2a61c8"
          },
          limit: {
            body_size: "",
            connect_timeout: "",
            connections: "",
            rate: "",
            rate_after: "",
            read_timeout: "",
            rpm: "",
            rps: "",
            send_time: "",
            whitelist: ""
          },
          log_config: "",
          name: "gxz2",
          namespace: "default",
          podAffinity: {
            affinity: true,
            key: "",
            required: false
          },
          priorityclassesName: "",
          readyReplicas: 1,
          replicas: 1,
          status: "1",
          template: [
            {
              env: {},
              historyImages: {
                "2019-08-20 07:55:59": "192.9.200.86:80/library/tomcat:7.0"
              },
              image: "library/tomcat:7.0",
              lifecycle: {},
              limits: {
                cpu: 1000,
                memory: 2000
              },
              livenessProbe: {},
              nodeSelector: [],
              ports: [
                {
                  extranet: true,
                  extranetUrl: "http://acaas-gateway.scrcu/default/gxz2/web",
                  intranetFullUrl: "gxz2.default:8080",
                  intranetUrl: "gxz2:8080",
                  portName: "web",
                  targetPort: 8080,
                  type: 1
                }
              ],
              proptemplate: {},
              readinessProbe: {},
              requests: {
                cpu: 1000,
                memory: 2000
              },
              volumeMap: {}
            }
          ]
        }
      ]
    };
  },
  methods: {
    exportfun() {
      let theader = this.getheader(this.arr);
      console.log("theader", theader);
      let data = this.formatJson(theader, this.arr);
      console.log("data", data);
      import("./Export2Excel").then(excel => {
        excel.export_json_to_excel({
          header: theader, //表头 必填
          data, //具体数据 必填
          filename: "excel-list", //非必填
          autoWidth: true, //非必填
          bookType: "xlsx" //非必填
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          if ({}.toString.call(v[j]) == "[object Object]") {
            return this.getobj(v[j]);
          } else if ({}.toString.call(v[j]) == "[object Array]") {
            return v[j].join("\n");
          } else if (v[j] === undefined) {
            console.log("v.template[0]", "j", v.template[0][j]);
            if ({}.toString.call(v.template[0][j]) == "[object Object]") {
              return this.getobj(v.template[0][j]);
            } else if ({}.toString.call(v.template[0][j]) == "[object Array]") {
              return v.template[0][j].join("\n");
            } else if (/ports/.test(j)) {
              let k = j.slice(-1);
              let length = v.template[0].ports.length;
              if (k < length) {
                return this.getobj(v.template[0].ports[k]);
              }
            } else {
              return v.template[0][j];
            }
          } else {
            return v[j];
          }
        })
      );
    },
    getheader(arr) {
      let a = Object.keys(arr[0]).slice(0, -1);
      let b = Object.keys(arr[0].template[0]);
      let index = b.indexOf("ports");
      b.splice(index, 1);
      let c = [];
      for (let i = 0; i < 10; i++) {
        c.push("ports" + i);
      }
      return a.concat(b, c);
    },
    getobj(obj) {
      let b = JSON.stringify(obj).slice(1, -1);
      let c = b.replace(/"/g, "").replace(/,/g, "\n");
      return c;
    }
  }
};
</script>

<style>
</style>