<template>
	<div>
		<h1>表格table</h1>
		<el-row type='flex' justify="center">
			<el-col :span='18'>
				<el-card>
					<el-table :data="tableData" border style="width: 100%">
						<el-table-column fixed prop="date" label="日期" width="150"></el-table-column>
						<el-table-column prop="name" label="姓名" width="120"></el-table-column>
						<el-table-column prop="province" label="省份" width="120"></el-table-column>
						<el-table-column prop="city" label="市区" width="120"></el-table-column>
						<el-table-column prop="address" label="地址" width="300"></el-table-column>
						<el-table-column prop="zip" label="邮编" width="120"></el-table-column>
						<el-table-column fixed="right" label="操作" width="100">
							<template slot-scope="scope">
								<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
								<el-button type="text" size="small">编辑</el-button>
							</template>
						</el-table-column>
					</el-table>
						
					<div>
						<el-tag class="tag" v-for="tag in tags" :key="tag.name" closable :type="tag.type">
							{{tag.name}}
						</el-tag>
					</div>

					<div class="progressDiv">
						<el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
						<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
						<el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
						<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
						<el-progress type="circle" :percentage="0"></el-progress>
						<el-progress type="circle" :percentage="25"></el-progress>
						<el-progress type="circle" :percentage="100" status="success"></el-progress>
						<el-progress type="circle" :percentage="50" status="exception"></el-progress>
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
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
				}],
				tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
      }
		},
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
  }
</script>

<style scoped>
	h1 {
		text-align: center;
	}
	.el-card {
		border-radius: 20px;
	}
	.el-card div {
		margin: 20px 0px 20px 0px;
	}
	.tag {
		margin: 0px 5px 0px 5px;
	}
</style>