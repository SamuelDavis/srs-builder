<template>
  <b-form>
    <b-form-row>
      <b-col>
        <b-form-group label="Created At">
          <b-form-input :value="meta.createdAt.toString()" readonly/>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Updated At">
          <b-form-input :value="meta.updatedAt.toString()" readonly/>
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-group label="Title" description="Provide the name of the product.">
      <b-form-input name="title" v-model="data.title"/>
    </b-form-group>
    <srs-input-group label="Product Owners" description="Provide the names and contact information for any persons who can speak authoritatively about the requirements of the product.">
      <b-list-group flush>
        <b-list-group-item v-for="(_, i) in data.productOwners" :key="i">
          <b-form-row>
            <b-col>
              <b-form-input v-model="data.productOwners[i].name" placeholder="Name..." title="name"/>
            </b-col>
            <b-col>
              <b-form-input v-model="data.productOwners[i].email" type="email" placeholder="Email..." title="email"/>
            </b-col>
            <b-col>
              <b-form-input v-model="data.productOwners[i].phone" type="tel" placeholder="Phone..." title="phone"/>
            </b-col>
            <srs-remove-badge :click="() => data.productOwners.splice(i, 1)"/>
          </b-form-row>
        </b-list-group-item>
      </b-list-group>
    </srs-input-group>
  </b-form>
</template>

<script>
  import { watchExpandingList } from '../../util.js'

  export default {
    name: 'srs-title',
    data () {
      return {
        meta: {
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        data: {
          title: '',
          productOwners: []
        }
      }
    },
    watch: {
      'data.productOwners': watchExpandingList('name', {
        name: '',
        email: '',
        phone: '',
      }),
    }
  }
</script>
