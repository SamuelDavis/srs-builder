<template>
  <b-container id="app" class="mt-5">
    <b-card no-body>
      <b-tabs card vertical pills>
        <b-tab title="Title">
          <b-form>
            <b-form-row>
              <b-col>
                <b-form-group label="Created At">
                  <b-form-input :value="meta.title.createdAt.toString()" readonly/>
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Updated At">
                  <b-form-input :value="meta.title.updatedAt.toString()" readonly/>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-group label="Title" description="Provide the name of the product.">
              <b-form-input name="title" v-model="title.title"/>
            </b-form-group>
            <b-form-group label="Product Owners" description="Provide the names and contact information for any persons who can speak authoritatively about the requirements of the product.">
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
                    <div class="srs-center">
                      <b-badge href="#" variant="danger" title="remove" @click="() => title.productOwners.splice(i, 1)">&minus;</b-badge>
                    </div>
                  </b-form-row>
                </b-list-group-item>
              </b-list-group>
            </b-form-group>
          </b-form>
        </b-tab>
        <b-tab title="Summary">
          <b-form>
            <b-form-group label="Product Perspective" description="Describe the context and origin of the product being specified in this SRS For example, state whether this product is a follow-on member of a product family, a replacement for certain existing systems, or a new, self-contained product. If the SRS defines a component of a larger system, relate the requirements of the larger system to the functionality of this software and identify interfaces between the two.">
              <b-textarea v-model="summary.perspective"></b-textarea>
            </b-form-group>
            <b-form-group label="Product Functions" description="Summarize the major functions the product must perform or must let the user perform.">
              <b-list-group-item v-for="({priority}, i) in summary.functions" :key="i" :style="`background-color: rgba(255, 25, 25, ${priority / summaryMaxPriority});`">
                <b-form-row>
                  <b-col>
                    <b-form-group label="Support">
                      <b-select v-model="summary.functions[i].support" :options="meta.summary.itDoesOpts"></b-select>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group label="Priority">
                      <b-form-input type="number" v-model="summary.functions[i].priority"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <div class="srs-center">
                    <b-badge class="mt-3" href="#" variant="danger" @click="() => summary.functions.splice(i, 1)">&minus;</b-badge>
                  </div>
                </b-form-row>
                <b-form-group label="1-Sentence Description">
                  <b-form-input v-model="summary.functions[i].description"></b-form-input>
                </b-form-group>
                <b-form-group label="Details">
                  <b-textarea v-model="summary.functions[i].details"></b-textarea>
                </b-form-group>
              </b-list-group-item>
            </b-form-group>
            <b-form-group label="Product Users" description="Describe the pertinent characteristics of each user class. Certain requirements may pertain only to certain user classes. Distinguish the most important user classes for this product from those who are less important to satisfy.">
              <b-list-group-item v-for="({priority}, i) in summary.users" :key="i" :style="`background-color: rgba(255, 25, 25, ${priority / summaryMaxPriority});`">
                <b-form-row>
                  <b-col>
                    <b-form-group label="Classification">
                      <b-form-input v-model="summary.users[i].classification"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <div class="srs-center">
                    <b-badge class="mt-3" href="#" variant="danger" @click="() => summary.users.splice(i, 1)">&minus;</b-badge>
                  </div>
                </b-form-row>
                <b-form-group label="Description">
                  <b-textarea v-model="summary.users[i].description"></b-textarea>
                </b-form-group>
              </b-list-group-item>
            </b-form-group>
          </b-form>
        </b-tab>
      </b-tabs>
    </b-card>
  </b-container>
</template>

<script>
  function watchExpandingList (idProp, prototype) {
    return {
      deep: true,
      immediate: true,
      handler (value) {
        const length = value.length
        if (length < 1 || value[length - 1][idProp]) {
          value.push({ ...prototype })
        }
      }
    }
  }

  export default {
    name: 'app',
    data () {
      return {
        meta: {
          title: {
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          summary: {
            itDoesOpts: {
              1: 'It Does...',
              0: 'It Does Not...'
            }
          }
        },
        title: {
          title: '',
          productOwners: []
        },
        summary: {
          perspective: '',
          functions: [],
          users: []
        }
      }
    },
    computed: {
      summaryMaxPriority () {
        return this.summary.functions.reduce((acc, { priority }) => {
          return acc === undefined ? priority : Math.max(acc, priority)
        }, undefined) || 1
      }
    },
    watch: {
      'title.productOwners': watchExpandingList('name', {
        name: '',
        email: '',
        phone: '',
      }),
      'summary.functions': watchExpandingList('description', {
        support: 1,
        priority: 0,
        description: '',
        details: ''
      }),
      'summary.users': watchExpandingList('classification', {
        classification: '',
        description: ''
      })
    }
  }
</script>

<style lang="scss" scoped>
  .form-group {
    width: 100%;
  }

  .srs-center {
    display: flex;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
  }
</style>
