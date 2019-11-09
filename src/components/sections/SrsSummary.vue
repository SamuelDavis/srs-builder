<template>
  <b-form>
    <b-tabs vertical pills>
      <b-tab title="Perspective">
        <srs-input-group label="Product Perspective" description="Describe the context and origin of the product being specified in this SRS For example, state whether this product is a follow-on member of a product family, a replacement for certain existing systems, or a new, self-contained product. If the SRS defines a component of a larger system, relate the requirements of the larger system to the functionality of this software and identify interfaces between the two.">
          <b-textarea v-model="data.perspective"></b-textarea>
        </srs-input-group>
      </b-tab>
      <b-tab title="Functions">
        <srs-input-group label="Product Functions" description="Summarize the major functions the product must perform or must let the user perform.">
          <b-list-group flush>
            <b-list-group-item v-for="({priority}, i) in data.functions" :key="i" :style="`background-color: rgba(255, 25, 25, ${priority / summaryMaxPriority});`">
              <b-form-row>
                <b-col>
                  <b-form-group label="Support">
                    <b-select v-model="data.functions[i].support" :options="meta.itDoesOpts"></b-select>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Priority">
                    <b-form-input type="number" v-model="data.functions[i].priority"></b-form-input>
                  </b-form-group>
                </b-col>
                <srs-remove-badge :click="() => data.functions.splice(i, 1)"/>
              </b-form-row>
              <b-form-group label="1-Sentence Description">
                <b-form-input v-model="data.functions[i].description"></b-form-input>
              </b-form-group>
              <b-form-group label="Details">
                <b-textarea v-model="data.functions[i].details"></b-textarea>
              </b-form-group>
            </b-list-group-item>
          </b-list-group>
        </srs-input-group>
      </b-tab>
      <b-tab title="Users">
        <srs-input-group label="Product Users" description="Describe the pertinent characteristics of each user class. Certain requirements may pertain only to certain user classes. Distinguish the most important user classes for this product from those who are less important to satisfy.">
          <b-list-group flush>
            <b-list-group-item v-for="({priority}, i) in data.users" :key="i" :style="`background-color: rgba(255, 25, 25, ${priority / (summaryMaxPriority || 1)});`">
              <b-form-row>
                <b-col>
                  <b-form-group label="Classification">
                    <b-form-input v-model="data.users[i].classification"></b-form-input>
                  </b-form-group>
                </b-col>
                <srs-remove-badge :click="() => data.users.splice(i, 1)"/>
              </b-form-row>
              <b-form-group label="Description">
                <b-textarea v-model="data.users[i].description"></b-textarea>
              </b-form-group>
            </b-list-group-item>
          </b-list-group>
        </srs-input-group>
      </b-tab>
      <b-tab title="Constraints">
        <srs-input-group label="Design and Implementation Constraints" description="Describe any items or issues that will limit the options available to the developers. These might include: corporate or regulatory policies; hardware limitations (timing requirements, memory requirements); interfaces to other applications; specific technologies, tools, and databases to be used; parallel operations; language requirements; communications protocols; security considerations; design conventions or programming standards.">
          <b-card no-body>
          <b-tabs card justified>
            <b-tab title="Design">
              <b-list-group flush>
                <b-list-group-item v-for="(_, i) in data.constraints.design" :key="i">
                  <b-form-row>
                    <b-col>
                      <b-form-group class="mb-0">
                        <b-textarea v-model="data.constraints.design[i]"></b-textarea>
                      </b-form-group>
                    </b-col>
                    <srs-remove-badge :click="() => data.constraints.design.splice(i, 1)"/>
                  </b-form-row>
                </b-list-group-item>
              </b-list-group>
            </b-tab>
            <b-tab title="Implementation">
              <b-list-group flush>
                <b-list-group-item v-for="(_, i) in data.constraints.implementation" :key="i">
                  <b-form-row>
                    <b-col>
                      <b-form-group class="mb-0">
                        <b-textarea v-model="data.constraints.implementation[i]"></b-textarea>
                      </b-form-group>
                    </b-col>
                    <srs-remove-badge :click="() => data.constraints.implementation.splice(i, 1)"/>
                  </b-form-row>
                </b-list-group-item>
              </b-list-group>
            </b-tab>
          </b-tabs>
          </b-card>
        </srs-input-group>
      </b-tab>
      <b-tab title="Assumptions">
        <srs-input-group label="Assumptions" description="List any assumed factors (as opposed to known facts) that could affect the requirements stated in the SRS. The project could be affected if these assumptions are incorrect, are not shared, or change.">
          <b-list-group flush>
            <b-list-group-item v-for="(_, i) in data.assumptions" :key="i">
              <b-form-row>
                <b-col>
                  <b-form-group class="mb-0">
                    <b-textarea v-model="data.assumptions[i]"></b-textarea>
                  </b-form-group>
                </b-col>
                <srs-remove-badge :click="() => data.assumptions.splice(i, 1)"></srs-remove-badge>
              </b-form-row>
            </b-list-group-item>
          </b-list-group>
        </srs-input-group>
      </b-tab>
      <b-tab title="Dependencies">
        <srs-input-group label="Dependencies" description="Identify any dependencies the project has on external factors. These could include third-party or commercial components that you plan to use.">
          <b-list-group flush>
            <b-list-group-item v-for="(_, i) in data.dependencies" :key="i">
              <b-form-row>
                <b-col>
                  <b-form-group label="Name">
                    <b-form-input v-model="data.dependencies[i].name"></b-form-input>
                  </b-form-group>
                </b-col>
                <srs-remove-badge :click="() => data.dependencies.splice(i, 1)"/>
              </b-form-row>
              <b-form-group label="Link" description="A URL to documentation on the dependency.">
                <b-form-input v-model="data.dependencies[i].link"></b-form-input>
              </b-form-group>
            </b-list-group-item>
          </b-list-group>
        </srs-input-group>
      </b-tab>
    </b-tabs>
  </b-form>
</template>

<script>
  import { watchExpandingList } from '../../util.js'

  export default {
    name: 'srs-summary',
    data () {
      return {
        meta: {
          itDoesOpts: {
            1: 'It Does...',
            0: 'It Does Not...'
          }
        },
        data: {
          perspective: '',
          functions: [],
          users: [],
          constraints: {
            design: [],
            implementation: []
          },
          assumptions: [],
          dependencies: []
        }
      }
    },
    computed: {
      summaryMaxPriority () {
        return this.data.functions.reduce((acc, { priority }) => {
          return acc === undefined ? priority : Math.max(acc, priority)
        }, undefined)
      }
    },
    watch: {
      'data.functions': watchExpandingList('description', {
        support: 1,
        priority: 0,
        description: '',
        details: ''
      }),
      'data.users': watchExpandingList('classification', {
        classification: '',
        description: ''
      }),
      'data.constraints.design': watchExpandingList(),
      'data.constraints.implementation': watchExpandingList(),
      'data.assumptions': watchExpandingList(),
      'data.dependencies': watchExpandingList('name', { name: '', link: '' })
    }
  }
</script>
