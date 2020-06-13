<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <a-form layout="inline">
        <div style="padding-bottom: 11px;">
          <span>组件类型：</span>
          <a-checkable-tag class="tagSelect" v-for="(item, index) in supports" :key="item.id" v-model="item.checked"
            @change="handleChange(index, $event)">
            {{ item.name }}
          </a-checkable-tag>
        </div>
        <div style="">
          <span>其它选项：</span>
          <a-form-item :label-col="{ span: 4 }" :wrapper-col="{ span: 8 }" label="配置名称:">
            <a-input v-decorator="['username', { rules: [{ required: true, message: 'Please input your name' }] }]"
              placeholder="Please input your name" />
          </a-form-item>
        </div>
      </a-form>
    </a-card>
    <a-card style="margin-top: 12px;">
      <a-list item-layout="horizontal" :grid="{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }" :data-source="conList">
        <a-list-item slot="renderItem" slot-scope="item">
          <a-card :bodyStyle="{paddingBottom:20}" hoverable>
            <a-card-meta :title="item.name">
              <a-avatar slot="avatar" size="small" :src="item.avatar" />
            </a-card-meta>
            <div class="cardItemContent">
              <div class="cardInfo">
                <div>
                  <p>组件类型</p>
                  <p>{{ item.type.name }}</p>
                </div>
                <div>
                  <p>启动状态</p>
                  <p style="color:red">
                    <a-popconfirm :title="item.state.value==='disabled'? '确认启动' : '确认停止'" @confirm=" alter()">
                      <span>
                        <a-switch size="small" :checked="item.state.value==='disabled'?false:true">
                        </a-switch>
                      </span>
                    </a-popconfirm>
                    </a-popconfirm="alert()">
                  </p>
                </div>
              </div>
            </div>
            <template slot="actions" class="ant-card-actions">
              <a-icon key="download" type="download" />
              <a-icon key="edit" type="edit" />
              <a-icon key="bug" type="bug" />
              <a-icon key="delete" type="delete" />
            </template>
          </a-card>
        </a-list-item>
      </a-list>
    </a-card>
  </page-header-wrapper>
</template>
<script>
  import { getSupports, getConfig } from '../../../api/network'
  import encodeQueryParam from '../../../utils/encodeParam'
  export default {
    data() {
      return {
        checked1: true,
        checked2: true,
        checked3: true,
        supports: [],
        conList: []
      }
    },
    updated() { },
    mounted() {
      this.getSupports()
      this.getConfigList()
    },
    methods: {
      getSupports() {
        getSupports()
          .then(res => {
            this.supports = res.result.map(v => {
              return {
                ...v,
                checked: true
              }
            })
          })
          .catch(() => { })
      },
      getConfigList() {
        const prm = {
          paging: false,
          sorts: { field: 'id', order: 'desc' },
          terms: {
            type$IN: '',
            name$LIKE: '',
          },
        }
        getConfig(encodeQueryParam(prm)).then(res => {
          console.log(res)
          this.conList = res.result
        }).catch(() => {

        })
      },
      handleChange(index, checked) {
        console.log('supports', this.supports)
      }
    }
  }
</script>
<style scoped>
  .cardItemContent {}

  .cardInfo {
    margin-top: 16px;
    margin-left: 0 px;
    zoom: 1;

  }

  .cardInfo div {
    margin: 0;
    padding: 0;
  }

  .cardInfo p {

    display: inline;
    margin: 0 10px;
  }
</style>
