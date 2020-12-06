<!--  -->
<template>
	<div>
		<h1>通知notice</h1>
		<el-row type='flex' justify="center">
			<el-col :span='14'>
				<el-card>
					<div>
						<h3>Alert</h3>
						<el-alert title="成功提示的文案" type="success" show-icon center ></el-alert>
						<el-alert title="消息提示的文案" type="info" show-icon description="文字说明"></el-alert>
						<el-alert title="警告提示的文案" type="warning" show-icon description="文字说明" center></el-alert>
						<el-alert title="错误提示的文案" type="error" show-icon></el-alert>
					</div>

					<div>
						<h3>Loading</h3>
					<el-button type="primary" @click="openFullScreen" v-loading.fullscreen.lock="fullscreenLoading">指令方式</el-button>
					<el-button type="primary" 	@click="openFullScreen2"> 服务方式</el-button>
					</div>

					<div>
						<h3>Message</h3>
						<el-button :plain="true" @click="open1">消息</el-button>
						<el-button :plain="true" @click="open2">成功</el-button>
						<el-button :plain="true" @click="open3">警告</el-button>
						<el-button :plain="true" @click="open4">错误</el-button>
					</div>

					<div>
						<h3>MessageBox</h3>
						<el-button type="text" @click="open5">点击打开 Message Box</el-button>
					</div>

					<div>
						<h3>Notification</h3>
						<el-button plain @click="open6"> 成功 </el-button>
						<el-button plain @click="open7"> 警告 </el-button>
						<el-button plain @click="open8"> 消息 </el-button>
						<el-button plain @click="open9"> 错误 </el-button>
					</div>



				</el-card>



			</el-col>
		</el-row>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
		},
		

    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
			},
			open1() {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
				})
			},
			open2() {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        });
      },
      open3() {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        });
      },
      open4() {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        });
			},
			open5() {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
			},
			open6() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },
      open7() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },
      open8() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },
      open9() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      }
			
    }
  }
</script>


<style scoped>
	h1 {
		text-align: center;
	}

	.el-card  div {
		margin:15px 0px 15px 0px;
	}
</style>