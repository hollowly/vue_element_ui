<!--  -->
<template>
	<div>
	<h1>表单form-and-card</h1>
	<el-row type='flex' justify="center">
		<el-col :span="6">
			<el-card class="box-card">
					<h1 style="margin:15px">欢迎登陆</h1>
					<el-divider></el-divider>
					<el-form :model="ValidateForm" ref="ValidateForm" label-width="100px" class="demo-ruleForm">
						<!-- 账户 -->
						<el-form-item
							label="账号"
							prop="name"
							:rules="[
								{ required: true, message: '账号不能为空'},
							]"
						>
							<el-input type="name" v-model.number="ValidateForm.name" placeholder="请输入账户"></el-input>
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

						<!-- 单选框 -->
						<el-radio-group v-model="radio">
							<el-radio :label="false">仅前端展示</el-radio>
							<el-radio :label="true">发送给后端</el-radio>
						</el-radio-group>

						<el-form-item
								label="后端IP地址"
								prop='ipp'
								:rules="[
									{required:true, message:'后端IP不能为空'}
								]"
								v-show='radio'
							>	
							<el-input v-model="ValidateForm.ipp"></el-input>
						</el-form-item>

						<!-- 提交 -->
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
					ipp:'http://192.168.101.55/',
				},
				radio:false
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
						alert("用户名:"+ this.ValidateForm.name+ ';密码:'+this.ValidateForm.password);
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
	.el-radio-group {
		display: flex; 
		margin: 18px;
		justify-content: center;
	}
</style>