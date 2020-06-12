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
      <a-list item-layout="horizontal">
        <a-list-item>
          <a-card style="width: 380px;height:170px">
            <a-card-meta title="TCP">
              <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </a-card-meta>
            <div className="{styles.cardItemContent}">
              <div className="{styles.cardInfo}">
                <div>
                  <p>组件类型</p>
                  <p>{item.type.name}</p>
                </div>
                <div>
                  <p>启动状态</p>
                  <p></p>
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
          <a-card style="width: 380px;height:170px">
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
          </a-card>
          <a-card style="width: 380px;height:170px">
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
          </a-card>
          <a-card style="width: 380px;height:170px">
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
          </a-card>
        </a-list-item>
      </a-list>
    </a-card>
  </page-header-wrapper>
</template>
<script>
  import { getSupports } from '../../../api/network'
  export default {
    data() {
      return {
        checked1: true,
        checked2: true,
        checked3: true,
        supports: []
      }
    },
    updated() { },
    mounted() {
      this.getSupports()
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
      handleChange(index, checked) {
        console.log('supports', this.supports)
      }
    }
  }
</script>
<style lang="less" scoped>
  .context {
    display: flex;
    flex-direction: column;
    margin-top: 2px;
  }

  .network-card-list {
    height: 100%;
    background-color: black;
  }

  .filterCardList {
    margin-bottom: -24px;
    background-color: aqua;

    :global {
      .ant-card-meta-content {
        margin-top: 0;
      }

      // disabled white space
      .ant-card-meta-avatar {
        font-size: 0;
      }

      .ant-list .ant-list-item-content-single {
        max-width: 100%;
      }
    }

    .cardInfo {
      margin-top: 16px;
      margin-left: 40px;
      zoom: 1;

      &::before,
      &::after {
        display: table;
        content: ' ';
      }

      &::after {
        clear: both;
        height: 0;
        font-size: 0;
        visibility: hidden;
      }

      &>div {
        position: relative;
        float: left;
        width: 50%;
        text-align: left;

        p {
          margin: 0;
          font-size: 12px;
          line-height: 20px;
          font-weight: 500;
        }

        p:first-child {
          margin-bottom: 4px;
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
  }

  .xx {
    .ant-input-number {
      width: 295px;
    }
  }

  .newButton {
    width: 100%;
    height: 170px;
    font-size: large;
    font-weight: 400;
  }

  .ant-tag {
    margin-right: 24px;
    padding: 0 8px;
    font-size: 14px;
  }
</style>