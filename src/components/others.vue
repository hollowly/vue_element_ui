<!--  -->
<template>
	<div>
		<h1>导航菜单navigation</h1>
		<el-row type='flex' justify="center">
			<el-col :span='10'>
				<el-card>
					<div class="box alignCenter">
						<h3>Tooltip</h3>
						<div class="top">
							<el-tooltip class="item" effect="light" content="Top Left 提示文字" placement="top-start">
								<el-button>上左</el-button>
							</el-tooltip>
							<el-tooltip class="item" effect="light" content="Top Center 提示文字" placement="top">
								<el-button>上边</el-button>
							</el-tooltip>
							<el-tooltip class="item" effect="light" content="Top Right 提示文字" placement="top-end">
								<el-button>上右</el-button>
							</el-tooltip>
						</div>
						<div class="left">
							<el-tooltip class="item" effect="light" content="Left Top 提示文字" placement="left-start">
								<el-button>左上</el-button>
							</el-tooltip>
							<el-tooltip class="item" effect="light" content="Left Center 提示文字" placement="left">
								<el-button>左边</el-button>
							</el-tooltip>
							<el-tooltip class="item" effect="light" content="Left Bottom 提示文字" placement="left-end">
								<el-button>左下</el-button>
							</el-tooltip>
						</div>

						<div class="right">
							<el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
								<el-button>右上</el-button>
							</el-tooltip>
							<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
								<el-button>右边</el-button>
							</el-tooltip>
							<el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
								<el-button>右下</el-button>
							</el-tooltip>
						</div>
						<div class="bottom">
							<el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
								<el-button>下左</el-button>
							</el-tooltip>
							<el-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
								<el-button>下边</el-button>
							</el-tooltip>
							<el-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
								<el-button>下右</el-button>
							</el-tooltip>
						</div>
					</div>

					<div class="alignCenter">
						<h3>Popover</h3>
						<el-popover ref="popover1" placement="top-start" title="标题" width="200" trigger="hover"
							content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
						</el-popover>

						<el-popover ref="popover2" placement="top-start" title="标题" width="200" trigger="click"
							content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
						</el-popover>

						<el-popover ref="popover3" placement="top-start" itle="标题" width="200" trigger="focus"
							content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
						</el-popover>

						<el-button v-popover:popover1>hover 激活</el-button>
						<el-button v-popover:popover2>click 激活</el-button>
						<el-button v-popover:popover3>focus 激活</el-button>
					</div>
					
					<div>
						<h3>轮播图</h3>

						  <div class="block">
								<h4>默认 Hover 指示器触发</h4>
								<el-carousel height="200px">
									<el-carousel-item v-for="item in imgUrl" :key="item">
										<img :src="item" width="100%">
									</el-carousel-item>
								</el-carousel>
							</div>
							
							<div class="block">
								<h4>Click 指示器触发</h4>
								<el-carousel trigger="click" height="200px">
									<el-carousel-item v-for="item in imgUrl" :key="item">
										<img :src="item" width="100%">
									</el-carousel-item>
								</el-carousel>
							</div>
							
							<div>
								<h4>卡片化</h4>
								<el-carousel :interval="4000" type="card" height="130px">
									<el-carousel-item v-for="item in imgUrl" :key="item">
										<img :src="item" width="100%">
									</el-carousel-item>
								</el-carousel>
							</div>

					</div>

					<div>
						<h3>折叠面板</h3>
						<el-collapse accordion>
							<el-collapse-item>
								<template slot="title">
									一致性 Consistency<i class="header-icon el-icon-info"></i>
								</template>
								<div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
								<div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
							</el-collapse-item>
							<el-collapse-item title="反馈 Feedback">
								<div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
								<div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
							</el-collapse-item>
							<el-collapse-item title="效率 Efficiency">
								<div>简化流程：设计简洁直观的操作流程；</div>
								<div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
								<div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
							</el-collapse-item>
							<el-collapse-item title="可控 Controllability">
								<div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
								<div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
							</el-collapse-item>
						</el-collapse>
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
			imgUrl: [
				require('../assets/img/10.jpg'),
				require('../assets/img/11.jpg'),
				require('../assets/img/12.jpg'),
				require('../assets/img/13.jpg'),
			]
		}
	},

}

</script>
<style scoped lang='less'>
	h1 {
		text-align: center;
	}
	h3 {
		margin: 20px 0px 20px 0px;
	}
	.demonstration {
		margin: 10px 0px 10px 0px;
	}
	.alignCenter {
		display: block;
		margin: 0 auto;
    text-align: center;
	}
 .box {
		width: 400px;
    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  img {
		background-position: center center !important;
		background-size: 50% !important;
	}
  
</style>