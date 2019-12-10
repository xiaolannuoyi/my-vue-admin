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
            "agree-app-name": "gxz1",
            "agree-app-type": "agree-application",
            "agree-app-version": "54550184-52c8-4d62-8d26-97e2fc127251"
          },
          limit: {
            body_size: "10m",
            connect_timeout: "10",
            connections: "100",
            rate: "50000",
            rate_after: "50000",
            read_timeout: "10",
            rpm: "10000",
            rps: "100",
            send_time: "10",
            whitelist: ""
          },
          log_config: "",
          name: "gxz1",
          namespace: "default",
          podAffinity: {
            affinity: true,
            key: "",
            required: false
          },
          priorityclassesName: "high-level",
          readyReplicas: 1,
          replicas: 1,
          status: "1",
          template: [
            {
              env: {
                k1: "v1",
                k2: "v2"
              },
              historyImages: {
                "2019-08-27 02:32:43": "192.9.200.86:80/library/nginx:latest"
              },
              image: "library/nginx:latest",
              lifecycle: {
                path: "/",
                port: 80,
                type: "2"
              },
              limits: {
                cpu: 1000,
                memory: 2000
              },
              livenessProbe: {
                failureThreshold: 3,
                initSeconds: 15,
                path: "/",
                periodSeconds: 30,
                port: 80,
                timeoutSeconds: 30,
                type: 2
              },
              nodeSelector: [],
              ports: [
                {
                  extranet: false,
                  intranetFullUrl: "gxz1.default:8080",
                  intranetUrl: "gxz1:8080",
                  portName: "web1",
                  targetPort: 8080,
                  type: 0
                },
                {
                  extranet: true,
                  extranetUrl: "http://acaas-gateway.scrcu/default/gxz1/web2",
                  intranetFullUrl: "gxz1.default:8081",
                  intranetUrl: "gxz1:8081",
                  portName: "web2",
                  targetPort: 8081,
                  type: 1
                },
                {
                  extranet: true,
                  extranetPort: 31444,
                  extranetUrl: "acaas-gateway.scrcu:31444",
                  intranetFullUrl: "gxz1.default:80",
                  intranetUrl: "gxz1:80",
                  portName: "web3",
                  targetPort: 80,
                  type: 0
                }
              ],
              proptemplate: {
                "/mnt": ["/abs-config/demo", "/abs-config/abs.properties"],
                "/var/lib/docker": ["/abs-system-config/filebeat.yaml"]
              },
              readinessProbe: {
                failureThreshold: 5,
                initSeconds: 15,
                path: "",
                periodSeconds: 3,
                port: 80,
                timeoutSeconds: 3,
                type: 1
              },
              requests: {
                cpu: 1000,
                memory: 2000
              },
              terminationGracePeriodSeconds: 40,
              volumeMap: {
                "/mnt": "gxzfsdemo"
              }
            }
          ]
        },
        {
          events: [],
          gatherLogs: [],
          imageResourceType: 0,
          labels: {
            "agree-app-name": "web",
            "agree-app-type": "agree-application",
            "agree-app-version": "1da324c5-5358-492e-937b-5cd83f23f2ae"
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
          name: "web",
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
                "2019-08-23 08:17:12": "192.9.200.86:80/library/tomcat:7.0"
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
                  extranetUrl: "http://acaas-gateway.scrcu/default/web/web",
                  intranetFullUrl: "web.default:81",
                  intranetUrl: "web:81",
                  portName: "web",
                  targetPort: 81,
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
      // console.log("theader", theader);
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
            // console.log("v.template[0]", "j", v.template[0][j]);
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