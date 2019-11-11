<template>
  <b-container>
    <b-row class="mb-5">
      <b-col class="text-left">
        Created <span class="date" v-text="formatDate(doc.createdAt)"/>
      </b-col>
      <b-col class="text-right">
        Updated <span class="date" v-text="formatDate(doc.createdAt)"/>
      </b-col>
    </b-row>
    <b-row class="text-center mb-5">
      <b-col>
        <h1>Software Requirements Specification</h1>
        <h5>for</h5>
        <h1 v-text="doc.title"/>
      </b-col>
    </b-row>
    <b-row class="text-right">
      <b-col>
        <h5>Product Owners</h5>
        <div :key="i" class="product-owners" v-for="(owner, i) in doc.owners">
          <span v-text="owner.name"/>
          <a :href="`mailto:${owner.email}`" v-if="owner.email" v-text="owner.email"/>
          <a :href="`tel:${owner.phone}`" v-if="owner.phone" v-text="owner.phone"/>
        </div>
      </b-col>
    </b-row>
    <hr class="page-break"/>
    <b-row>
      <b-col>
        <h2 class="text-center mb-3">Index</h2>
        <ol>
          <li :key="i" v-for="(item, i) in index">
            <a :href="`#${i}`"><h3 v-text="item.label"/></a>
            <ol v-if="item.value instanceof Array">
              <li :key="j" v-for="(item, j) in item.value">
                <a :href="`#${i}.${j}`"><h4 v-text="item.label"/></a>
                <ol v-if="item.value instanceof Array">
                  <li :key="k" v-for="(item, k) in item.value">
                    <a :href="`#${i}.${j}.${k}`"><h5 v-text="item.label"/></a>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
        </ol>
      </b-col>
    </b-row>
    <hr class="page-break">
    <b-row>
      <b-col>
        <srs-render-item v-bind="{value: index}"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import { mapProp } from '../store'
  import SrsRenderItem from './SrsRenderItem.vue'

  export default {
    name: 'srs-renderer',
    components: {
      'srs-render-item': SrsRenderItem,
    },
    computed: {
      doc: mapProp('doc'),
      createdAt () {
        return `Created: ${this.formatDate(this.doc.createdAt)}`
      },
      updatedAt () {
        return `Updated : ${this.formatDate(this.doc.updatedAt)}`
      },
      index () {
        return this.cleanUpState([
          {
            label: 'Summary',
            value: [
              {
                label: 'Perspective',
                value: this.doc.perspective,
              },
              {
                label: 'Functions',
                value: this.doc.functions.map((func) => ({ label: func.description, value: func }))
              },
              {
                label: 'Users',
                value: this.doc.users.map((user) => ({ label: user.classification, value: user.description }))
              },
              {
                label: 'Design Constraints',
                value: this.doc.designConstraints.map((constraint) => ({ label: constraint, value: constraint }))
              },
              {
                label: 'Implementation Constraints',
                value: this.doc.implementationConstraints.map((constraint) => ({ label: constraint, value: constraint }))
              },
              {
                label: 'Assumptions',
                value: this.doc.assumptions.map((assumption) => ({ label: assumption, value: assumption }))
              },
              {
                label: 'Dependencies',
                value: this.doc.dependencies.map((dependency) => ({ label: dependency.name, value: dependency.link }))
              }
            ]
          },
          {
            label: 'Stories',
            value: this.doc.stories.map((story) => ({ label: story.description, value: story }))
          },
          {
            label: 'Requirements',
            value: [
              {
                label: 'Non-Functional Requirements',
                value: [
                  { label: 'Performance', value: this.doc.performance },
                  { label: 'Security', value: this.doc.security },
                ]
              },
              { label: 'Other', value: this.doc.other }
            ]
          }
        ])
      }
    },
    methods: {
      cleanUpState (items) {
        return items.reduce((acc, item) => {
          const value = item.value instanceof Array
            ? this.cleanUpState(item.value)
            : item.value
          return item.label && value && Object.keys(value).length
            ? [...acc, { ...item, value }]
            : acc;
        }, [])
      },
      formatDate (date) {
        return [
          date.getMonth(),
          date.getDate(),
          date.getFullYear(),
        ].join(' / ')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .date {
    white-space: nowrap;
  }

  .product-owners a {
    border-left: 1px dashed black;
    padding-left: 1em;
    margin-left: 1em;
    display: inline-block;
    min-width: 200px;
  }

  @media print {
    .page-break {
      break-after: page;
    }

    hr.page-break {
      opacity: 0;
    }

    a {
      text-decoration: none;
      color: black;
    }
  }

  ol, ::v-deep ol {
    counter-reset: item;

    li {
      display: block;

      > a:first-child, > h2:first-child {
        display: inline-block;
      }
    }

    li:before {
      content: counters(item, ".") " ";
      counter-increment: item;
    }
  }
</style>
