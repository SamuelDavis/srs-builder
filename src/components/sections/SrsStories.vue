<template>
  <b-form>
    <srs-input-group description="This template illustrates organizing the functional requirements for the product by system features, the major services provided by the product." label="User Stories">
      <b-list-group flush>
        <b-list-group-item :key="i" v-for="(_, i) in stories">
          <b-form-row>
            <b-col>
              <b-form-group description="These options are supplied from the Summary section's Functions." label="In order to...">
                <b-select :options="functionDescriptions" v-model="stories[i].description">
                  <template v-slot:first>
                    <option :value="null">...</option>
                  </template>
                </b-select>
              </b-form-group>
            </b-col>
            <srs-remove-badge :click="() => stories.splice(i, 1)"/>
          </b-form-row>
          <b-form-row>
            <b-col>
              <b-form-group description="These options are supplied from the Summary section's Users" label="As a...">
                <b-select :options="userClasses" v-model="stories[i].user">
                  <template v-slot:first>
                    <option :value="null">...</option>
                  </template>
                </b-select>
              </b-form-group>
            </b-col>
          </b-form-row>
          <b-form-group class="mb-0" label="I do the following...">
            <ol>
              <li :class="{'mb-2': j < stories[i].steps.length - 1}" :key="j" v-for="(_, j) in stories[i].steps">
                <b-form-row>
                  <b-col>
                    <b-form-group class="mb-0">
                      <b-textarea v-model="stories[i].steps[j]"/>
                    </b-form-group>
                  </b-col>
                  <srs-remove-badge :click="() => stories[i].steps.splice(j, 1)"/>
                </b-form-row>
              </li>
            </ol>
          </b-form-group>
        </b-list-group-item>
      </b-list-group>
    </srs-input-group>
  </b-form>
</template>

<script>
  import { mapProp } from '../../store'
  import { mapGetters } from 'vuex'

  export default {
    name: 'srs-stories',
    computed: {
      ...mapGetters(['functionDescriptions', 'userClasses']),
      stories: mapProp('doc.stories'),
    }
  }
</script>

<style lang="scss">
  ol {
    padding-left: 1em;
  }
</style>
