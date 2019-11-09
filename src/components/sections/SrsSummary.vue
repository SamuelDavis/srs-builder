<template>
  <b-form>
    <b-tabs nav-wrapper-class="col-12 col-sm-auto" pills vertical>
      <b-tab title="Perspective">
        <srs-input-group description="Describe the context and origin of the product being specified in this SRS For example, state whether this product is a follow-on member of a product family, a replacement for certain existing systems, or a new, self-contained product. If the SRS defines a component of a larger system, relate the requirements of the larger system to the functionality of this software and identify interfaces between the two." label="Product Perspective">
          <b-textarea v-model="perspective"></b-textarea>
        </srs-input-group>
      </b-tab>
      <b-tab title="Functions">
        <srs-input-group description="Summarize the major functions the product must perform or must let the user perform." label="Product Functions">
          <b-list-group flush>
            <b-list-group-item :key="i" :style="`background-color: rgba(255, 25, 25, ${priority / (maxFunctionPriority || 1)});`" v-for="({priority}, i) in functions">
              <b-form-row>
                <b-col>
                  <b-form-group label="Support">
                    <b-select :options="itDoesOpts" v-model="functions[i].support"/>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Priority">
                    <b-form-input type="number" v-model="functions[i].priority"/>
                  </b-form-group>
                </b-col>
                <srs-remove-badge :click="() => functions.splice(i, 1)"/>
              </b-form-row>
              <b-form-group label="1-Sentence Description">
                <b-form-input v-model="functions[i].description"/>
              </b-form-group>
              <b-form-group label="Details">
                <b-textarea v-model="functions[i].details"/>
              </b-form-group>
            </b-list-group-item>
          </b-list-group>
        </srs-input-group>
      </b-tab>
      <b-tab title="Users">
        <srs-input-group description="Describe the pertinent characteristics of each user class. Certain requirements may pertain only to certain user classes. Distinguish the most important user classes for this product from those who are less important to satisfy." label="Product Users">
          <b-list-group flush>
            <b-list-group-item :key="i" v-for="(_, i) in users">
              <b-form-row>
                <b-col>
                  <b-form-group label="Classification">
                    <b-form-input v-model="users[i].classification"/>
                  </b-form-group>
                </b-col>
                <srs-remove-badge :click="() => users.splice(i, 1)"/>
              </b-form-row>
              <b-form-group label="Description">
                <b-textarea v-model="users[i].description"/>
              </b-form-group>
            </b-list-group-item>
          </b-list-group>
        </srs-input-group>
      </b-tab>
      <b-tab title="Constraints">
        <srs-input-group description="Describe any items or issues that will limit the options available to the developers. These might include: corporate or regulatory policies; hardware limitations (timing requirements, memory requirements); interfaces to other applications; specific technologies, tools, and databases to be used; parallel operations; language requirements; communications protocols; security considerations; design conventions or programming standards." label="Design and Implementation Constraints">
          <b-card no-body>
            <b-tabs card justified>
              <b-tab title="Design">
                <b-list-group flush>
                  <b-list-group-item :key="i" v-for="(_, i) in designConstraints">
                    <b-form-row>
                      <b-col>
                        <b-form-group class="mb-0">
                          <b-textarea v-model="designConstraints[i]"/>
                        </b-form-group>
                      </b-col>
                      <srs-remove-badge :click="() => designConstraints.splice(i, 1)"/>
                    </b-form-row>
                  </b-list-group-item>
                </b-list-group>
              </b-tab>
              <b-tab title="Implementation">
                <b-list-group flush>
                  <b-list-group-item :key="i" v-for="(_, i) in implementationConstraints">
                    <b-form-row>
                      <b-col>
                        <b-form-group class="mb-0">
                          <b-textarea v-model="implementationConstraints[i]"/>
                        </b-form-group>
                      </b-col>
                      <srs-remove-badge :click="() => implementationConstraints.splice(i, 1)"/>
                    </b-form-row>
                  </b-list-group-item>
                </b-list-group>
              </b-tab>
            </b-tabs>
          </b-card>
        </srs-input-group>
      </b-tab>
      <b-tab title="Assumptions">
        <srs-input-group description="List any assumed factors (as opposed to known facts) that could affect the requirements stated in the SRS. The project could be affected if these assumptions are incorrect, are not shared, or change." label="Assumptions">
          <b-list-group flush>
            <b-list-group-item :key="i" v-for="(_, i) in assumptions">
              <b-form-row>
                <b-col>
                  <b-form-group class="mb-0">
                    <b-textarea v-model="assumptions[i]"/>
                  </b-form-group>
                </b-col>
                <srs-remove-badge :click="() => assumptions.splice(i, 1)"/>
              </b-form-row>
            </b-list-group-item>
          </b-list-group>
        </srs-input-group>
      </b-tab>
      <b-tab title="Dependencies">
        <srs-input-group description="Identify any dependencies the project has on external factors. These could include third-party or commercial components that you plan to use." label="Dependencies">
          <b-list-group flush>
            <b-list-group-item :key="i" v-for="(_, i) in dependencies">
              <b-form-row>
                <b-col>
                  <b-form-group label="Name">
                    <b-form-input v-model="dependencies[i].name"/>
                  </b-form-group>
                </b-col>
                <srs-remove-badge :click="() => dependencies.splice(i, 1)"/>
              </b-form-row>
              <b-form-group description="A URL to documentation on the dependency." label="Link">
                <b-form-input v-model="dependencies[i].link"/>
              </b-form-group>
            </b-list-group-item>
          </b-list-group>
        </srs-input-group>
      </b-tab>
    </b-tabs>
  </b-form>
</template>

<script>
  import { mapProp } from '../../store'
  import { mapGetters } from 'vuex'

  export default {
    name: 'srs-summary',
    computed: {
      ...mapGetters(['itDoesOpts', 'maxFunctionPriority']),
      perspective: mapProp('doc.perspective'),
      functions: mapProp('doc.functions'),
      users: mapProp('doc.users'),
      designConstraints: mapProp('doc.designConstraints'),
      implementationConstraints: mapProp('doc.implementationConstraints'),
      assumptions: mapProp('doc.assumptions'),
      dependencies: mapProp('doc.dependencies')
    }
  }
</script>
