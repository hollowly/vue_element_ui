<!--  -->
<template>
	<div>
		<h1>图标按钮icon-button</h1>
		<el-row type='flex' justify="center">
		<el-col :span="12">
			<el-card class="box-card">
				<div>
					<i class="el-icon-edit"></i>
					<i class="el-icon-share"></i>
					<i class="el-icon-delete"></i>
					<i class="el-icon-success"></i>
					<i class="el-icon-error"></i>
					<i class="el-icon-warning"></i>
					<i class="el-icon-date"></i>
					<i class="el-icon-check"></i>
					<i class="el-icon-document"></i>
					<i class="el-icon-edit-outline"></i>
					<i class="el-icon-download"></i>
					<i class="el-icon-location"></i>
					<i class="el-icon-loading"></i>
					<i class="el-icon-menu"></i>
					<i class="el-icon-picture"></i>
					<i class="el-icon-zoom-in"></i>
					<i class="el-icon-time"></i>
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
				</div>

				<div>
					<el-button>默认按钮</el-button>
					<el-button type="primary">主要按钮</el-button>
					<el-button type="success">成功按钮</el-button>
					<el-button type="info">信息按钮</el-button>
					<el-button type="warning">警告按钮</el-button>
					<el-button type="danger">危险按钮</el-button>
				</div>

				<div style="margin: 20px 0">
					<el-button plain>朴素按钮</el-button>
					<el-button type="primary" plain>主要按钮</el-button>
					<el-button type="success" plain>成功按钮</el-button>
					<el-button type="info" plain>信息按钮</el-button>
					<el-button type="warning" plain>警告按钮</el-button>
					<el-button type="danger" plain>危险按钮</el-button>
				</div>

				<div>
					<el-button round>圆形按钮</el-button>
					<el-button type="primary" round>主要按钮</el-button>
					<el-button type="success" round>成功按钮</el-button>
					<el-button type="info" round>信息按钮</el-button>
					<el-button type="warning" round>警告按钮</el-button>
					<el-button type="danger" round>危险按钮</el-button>
				</div>

				<div class="div1">
					<el-button type="primary" icon="el-icon-edit"></el-button>
					<el-button type="primary" icon="el-icon-share"></el-button>
					<el-button type="primary" icon="el-icon-delete"></el-button>
					<el-button type="primary" icon="el-icon-check"></el-button>
					<el-button type="primary" icon="el-icon-download"></el-button>
					<el-button type="primary" icon="el-icon-search">搜索</el-button>
					<el-button type="primary">上传<i class="el-icon-upload el-icon--right" style="padding:0"></i></el-button>
					<el-button type="primary" :loading="true">加载中</el-button>
				</div>

				
			</el-card>
		</el-col>
	</el-row>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},

}

</script>

<style scoped>
	h1 {
		text-align: center;
	}
	i {
		padding: 30px 10px 30px 10px;
	}
  .box-card {
		border-radius: 20px;
	}
	.div1 {
		margin: 30px 0px 30px 0px;
	}
</style>