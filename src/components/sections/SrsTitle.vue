<template>
  <b-form>
    <b-form-row>
      <b-col>
        <b-form-group label="Created At">
          <b-form-input :value="createdAt.toString()" readonly/>
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group label="Updated At">
          <b-form-input :value="updatedAt.toString()" readonly/>
        </b-form-group>
      </b-col>
    </b-form-row>
    <b-form-group description="Provide the name of the product." label="Title">
      <b-form-input name="title" v-model="title"/>
    </b-form-group>
    <srs-input-group description="Provide the names and contact information for any persons who can speak authoritatively about the requirements of the product." label="Product Owners">
      <b-list-group flush>
        <b-list-group-item :key="i" v-for="(_, i) in owners">
          <b-form-row>
            <b-col>
              <b-form-input placeholder="Name..." title="name" v-model="owners[i].name"/>
            </b-col>
            <b-col>
              <b-form-input placeholder="Email..." title="email" type="email" v-model="owners[i].email"/>
            </b-col>
            <b-col>
              <b-form-input placeholder="Phone..." title="phone" type="tel" v-model="owners[i].phone"/>
            </b-col>
            <srs-remove-badge :click="() => owners.splice(i, 1)"/>
          </b-form-row>
        </b-list-group-item>
      </b-list-group>
    </srs-input-group>
  </b-form>
</template>

<script>
  import { mapProp } from '../../store'

  export default {
    name: 'srs-title',
    computed: {
      createdAt: mapProp('doc.createdAt'),
      updatedAt: mapProp('doc.updatedAt'),
      title: mapProp('doc.title'),
      owners: mapProp('doc.owners'),
    }
  }
</script>
