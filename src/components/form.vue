<!--  -->
<template>
	<div>
		<h1>表单form</h1>
		<el-row type='flex' justify="center">
			<el-col :span='12'>
				<el-card class="box-card">
				<el-radio-group v-model="radio1" style="margin:0">
					<el-radio :label="1">选项一</el-radio>
					<el-radio :label="2">选项二</el-radio>
					<el-radio :label="3">选项三</el-radio>
				</el-radio-group>
				
				<div>
					<el-radio-group v-model="radio2">
						<el-radio-button label="上海"></el-radio-button>
						<el-radio-button label="北京"></el-radio-button>
						<el-radio-button label="广州"></el-radio-button>
						<el-radio-button label="深圳"></el-radio-button>
					</el-radio-group>
				</div>

				<el-radio-group v-model="radio3">
					<el-radio :label="1" border>选项一</el-radio>
					<el-radio :label="2" border>选项二</el-radio>
					<el-radio :label="3" border>选项三</el-radio>
				</el-radio-group>

				<div class="block">
				<!-- <span class="demonstration"></span> -->
				<el-cascader
					expand-trigger="hover"
					:options="options"
					v-model="selectedOptions2"
					@change="handleChange">
				</el-cascader>
				</div>

				<div>
					<el-switch
						v-model="value1"
						active-text="按月付费"
						inactive-text="按年付费">
					</el-switch>
					<el-switch
						style="display: block"
						v-model="value2"
						active-color="#13ce66"
						inactive-color="#ff4949"
						active-text="按月付费"
						inactive-text="按年付费">
					</el-switch>
				</div>

				<div class="block">
					<h4>选择天数</h4>
					<el-slider
						v-model="value3"
						:step="10"
						show-stops>
					</el-slider>
				</div>

			  <div class="block">
					<h4>选择日期</h4>
					<el-date-picker
						v-model="value4"
						type="datetime"
						placeholder="选择日期时间">
					</el-date-picker>
				</div>
				
				<div>
					<h4>选择头像</h4>
					<el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload">
					<img v-if="imageUrl" :src="imageUrl" class="avatar">
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
				</div>

				<div>
					<h4>选择文件</h4>
					<el-upload
						class="upload-demo"
						drag
						action="https://jsonplaceholder.typicode.com/posts/"
						multiple>
						<i class="el-icon-upload"></i>
						<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
						<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>
				</div>

				<div class="block">
					<h4>评分</h4>
					<el-rate
						v-model="value5"
						:colors="['#99A9BF', '#F7BA2A', '#FF9900']">
					</el-rate>
				</div>

				<div>
					<h4>选择颜色</h4>
					<el-color-picker v-model="color1" show-alpha></el-color-picker>
					<div :style="{'backgroundColor':color1}" class="cheshi">测试</div>
				</div>

				<div>
					<h4>穿梭框</h4>
					<el-transfer
						filterable:true
						:filter-method="filterMethod"
						filter-placeholder="请输入城市拼音"
						v-model="value6"
						:data="data2">
					</el-transfer>
				</div>

				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
  export default {
    data () {
			const generateData2 = _ => {
			const data = [];
			const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
			const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
			cities.forEach((city, index) => {
				data.push({
					label: city,
					key: index,
					pinyin: pinyin[index]
				});
			});
				return data;
			};
      return {
        radio1: 1,
				radio2: '上海',
				radio3: 1,
				value1:true,
				value2:true,
				value3:20,
        value4: '',
				value5:null,
				imageUrl: '',
				color1: 'rgba(19, 206, 102, 0.8)',

        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions: [],
				selectedOptions2: [],
				
				pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
				},
				data2: generateData2(),
				value6: [],
				filterMethod(query, item) {
					return item.pinyin.indexOf(query) > -1;
				}
			};
			
		},

		
		methods: {
			handleChange(value) {
				console.log(value);
			},
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
				return isJPG && isLt2M;
			}
		}
  }

</script>

<style scoped>
	h1 {
		text-align: center;
	}
	h4 {
		margin: 10px 0px 10px 0px;
	}
	.el-radio-group {
		margin-top: 20px;
	}
	.block {
		margin: 20px 0px 20px 0px;
	}

	.avatar-uploader {
		width:180px;
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
  }
  .avatar-uploader:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
	.cheshi {
		width: 100px;
		height: 100px;
	}
</style>