<template>
  <b-container id="app" class="mt-5">
    <b-card no-body>
      <b-tabs card vertical pills>
        <b-tab title="Title">
          <b-form>
            <b-form-row>
              <b-col>
                <b-form-group label="Created At">
                  <b-form-input :value="title.createdAt.toString()" readonly/>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Updated At">
                  <b-form-input :value="title.updatedAt.toString()" readonly/>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-row>
              <b-form-group label="Title" class="w-100">
                <b-form-input name="title" v-model="title.title"/>
              </b-form-group>
              <b-form-group label="Product Owners">
                <b-list-group>
                  <b-list-group-item v-for="(_, i) in title.productOwners" :key="i">
                    <b-form-row>
                      <b-col>
                        <b-form-input v-model="title.productOwners[i].name" placeholder="Name..." title="name"/>
                      </b-col>
                      <b-col>
                        <b-form-input v-model="title.productOwners[i].email" type="email" placeholder="Email..." title="email"/>
                      </b-col>
                      <b-col>
                        <b-form-input v-model="title.productOwners[i].phone" type="tel" placeholder="Phone..." title="phone"/>
                      </b-col>
                      <b-badge class="my-2" href="#" variant="danger" title="remove" @click="() => title.productOwners.splice(i, 1)">&minus;</b-badge>
                    </b-form-row>
                  </b-list-group-item>
                </b-list-group>
              </b-form-group>
            </b-form-row>
          </b-form>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        title: {
          createdAt: new Date(),
          updatedAt: new Date(),
          title: '',
          productOwners: []
        }
      }
    },
    watch: {
      'title.productOwners': {
        deep: true,
        immediate: true,
        handler: function () {
          const length = this.title.productOwners.length
          if (length < 1 || this.title.productOwners[length - 1].name) {
            this.title.productOwners.push({
              name: '',
              email: '',
              phone: '',
            })
          }
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
