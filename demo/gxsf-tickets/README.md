### 简介
正常情况下使用单选/多选方式（uni-data-checkbox），只能选择这个列表内的数据，如果有个选项是其他，要求可以输入文字，简单的选择控件就不能满足了，
此控件是在uni-data-checkbox基础上做了一个其他选项扩展，支持单选和多选，本地数据或者关联表数据，在选择正常的选项后，其他选项的内容默认为空字符串，列表上显示的时候，可以根据这个other字段是否有值来显示

### 使用步骤
1. 上传database下的schema
2. 在unicloud的web控制台，数据库管理里面，-->表结构-->导出表单页面


### 前端代码（自动生成后）

```
	<uni-forms-item name="health" label="身体状况">
		<cloud-data-checkbox-other :otherValue="formData.health_other" collection="cloud-basic-datas" field="_id as value, text,is_other,memo,sort"
		  orderby="sort asc" :value="formData.health" />
	</uni-forms-item>
```


![未选择](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-prvwnlnjkku189f3a3/d6b27110-4b44-11eb-bdc1-8bd33eb6adaa.jpg)
![正常选择](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-prvwnlnjkku189f3a3/d79b4a70-4b44-11eb-97b7-0dc4655d6e68.jpg)
![选择其他](https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-prvwnlnjkku189f3a3/d4d99260-4b44-11eb-bdc1-8bd33eb6adaa.jpg)
