<!--  -->
<template>
	<div>
		<h1>导航菜单navigation</h1>
		<el-row type='flex' justify="center">
			<el-col :span='14'>
				<el-card>
					<div>
						<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"
							@select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
							<el-menu-item index="1">处理中心</el-menu-item>
							<el-submenu index="2">
								<template slot="title">我的工作台</template>
								<el-menu-item index="2-1">选项1</el-menu-item>
								<el-menu-item index="2-2">选项2</el-menu-item>
								<el-menu-item index="2-3">选项3</el-menu-item>
							</el-submenu>
							<el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
						</el-menu>
					</div>

					<div>
						<el-col :span="12">
						<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
						@close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
							<el-submenu index="1">
								<template slot="title">
									<i class="el-icon-location"></i>
									<span>导航一</span>
								</template>
								<el-menu-item-group>
									<template slot="title">分组一</template>
									<el-menu-item index="1-1">选项1</el-menu-item>
									<el-menu-item index="1-2">选项2</el-menu-item>
								</el-menu-item-group>
								<el-menu-item-group title="分组2">
									<el-menu-item index="1-3">选项3</el-menu-item>
								</el-menu-item-group>
								<el-submenu index="1-4">
									<template slot="title">选项4</template>
									<el-menu-item index="1-4-1">选项1</el-menu-item>
								</el-submenu>
							</el-submenu>
							<el-menu-item index="2">
								<i class="el-icon-menu"></i>
								<span slot="title">导航二</span>
							</el-menu-item>
							<el-menu-item index="3">
								<i class="el-icon-setting"></i>
								<span slot="title">导航三</span>
							</el-menu-item>
						</el-menu>
						</el-col>
					</div>

					<div class="div1">
						<el-tabs v-model="activeName" @tab-click="handleClick">
							<el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
							<el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
							<el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
							<el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
						</el-tabs>
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
        activeIndex: '1',
				activeIndex2: '1',
        activeName: 'second',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
			},
			handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
			},
			handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scoped>
	a,a:hover,a:active,a:visited,a:link {
		text-decoration: none;
	}
	h1 {
		text-align: center;
	}
	.el-menu.el-menu--horizontal {
    border-bottom: none;
	}
</style>