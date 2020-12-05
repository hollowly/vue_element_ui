<!--  -->
<template>
	<div>
	<el-row :gutter="20">
		<h1>表单form-and-card</h1>
		<el-col :span="8" :offset="8">
			<el-card class="box-card">
					<h1>欢迎登录</h1>
					<el-form :model="ValidateForm" ref="ValidateForm" label-width="100px" class="demo-ruleForm">
						<!-- 账户 -->
						<el-form-item
							label="账号"
							prop="name"
							:rules="[
								{ required: true, message: '账号不能为空'},
							]"
						>
							<el-input type="name" v-model.number="ValidateForm.name" auto-complete="off" placeholder="请输入账户"></el-input>
						</el-form-item>
						<!-- 密码 -->
							<el-form-item
							label="密码"
							prop="password"
							:rules="[
								{ required: true, message: '密码不能为空'},
							]"
						>
							<el-input v-model.number="ValidateForm.password" show-password placeholder="请输入密码"></el-input>
						</el-form-item>
						<el-form-item>
							<el-button type="primary" @click="submitForm('ValidateForm')">提交</el-button>
							<el-button @click="resetForm('ValidateForm')">重置</el-button>
						</el-form-item>
					</el-form>
			</el-card>
		</el-col>
	</el-row>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        ValidateForm: {
					name: '',
					password:'',
				},
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
						alert("用户名:"+ this.ValidateForm.name+ '密码:'+this.ValidateForm.password);
          } else {
            console.log('error');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
	h1 {
		text-align: center;
	}
  .box-card {
		border-radius: 20px;
  }
</style>