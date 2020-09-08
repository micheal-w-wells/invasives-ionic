import React from 'react';
import Form from '@rjsf/core';
import { JSONSchema4, JSONSchema7 } from "json-schema";
import './ExploreContainer.css';



// db caching related:
import {
  createRxDatabase,
  RxDatabase,
  RxCollection,
  RxJsonSchema,
  RxDocument,
  addRxPlugin,
  _createRxCollection
} from 'rxdb';

addRxPlugin(require('pouchdb-adapter-cordova-sqlite'));
const database = createRxDatabase({
  name: 'mydatabase',
  adapter: 'cordova-sqlite', // the name of your adapter
  ignoreDuplicate: true
});




// from this template/component:
interface ContainerProps {
  name: string;
}



// react json schema form related:
const schema: JSONSchema7 = {
  "required": [
    "activityType",
    "activityTypeData",
    "activitySubType",
    "activitySubTypeData",
    "locationAndGeometry"
  ],
  "properties": {
    "activityType": {
      "type": "string",
      "title": "Activity Type"
    },
    "activityTypeData": {
      "type": "object",
      "title": "Activity Type Data"
    },
    "activitySubType": {
      "type": "string",
      "title": "Activity Sub-Type"
    },
    "activitySubTypeData": {
      "type": "object",
      "title": "Activity Sub-Type Data"
    },
    "date": {
      "type": "string",
      "title": "Date",
      "description": "Date in YYYY-MM-DD format"
    },
    "locationAndGeometry": {
      "type": "object",
      "additionalProperties": false,
      "description": "Location and geometry information",
      "title": "Location and Geometry",
      "properties": {
        "anchorPointY": {
          "type": "number",
          "title": "Anchor Point Y"
        },
        "anchorPointX": {
          "type": "number",
          "title": "Anchor Point X"
        },
        "area": {
          "type": "number",
          "title": "Area"
        },
        "jurisdiction": {
          "type": "string",
          "title": "Jurisdiction"
        },
        "agency": {
          "type": "string",
          "title": "Agency"
        },
        "observer1FirstName": {
          "type": "string",
          "title": "First Name"
        },
        "observer1LastName": {
          "type": "string",
          "title": "Last Name"
        },
        "locationComment": {
          "type": "string",
          "title": "Location Comment"
        },
        "generalComment": {
          "type": "string",
          "title": "General Comment"
        },
        "photoTaken": {
          "type": "boolean",
          "title": "Photo Taken"
        }
      }
    }
  }
};

const uiSchema = {
  "activityType": {
    "ui:autofocus": true
  },
  "activityTypeData": {
    "ui:autofocus": true,
    "ui:widget": "textarea"
  },
  "activitySubType": {
    "ui:autofocus": true
  },
  "activitySubTypeData": {
    "ui:autofocus": true
  },
  "date": {
    "ui:autofocus": true,
    "ui:widget": "hidden"
  },
  "locationAndGeometry": {
    "anchorPointY": {
      "ui:autofocus": true
    },
    "anchorPointX": {
      "ui:autofocus": true
    },
    "area": {
      "ui:autofocus": true
    },
    "jurisdiction": {
      "ui:autofocus": true
    },
    "agency": {
      "ui:autofocus": true
    },
    "observer1FirstName": {
      "ui:autofocus": true
    },
    "observer1LastName": {
      "ui:autofocus": true
    },
    "locationComment": {
      "ui:autofocus": true
    },
    "generalComment": {
      "ui:autofocus": true
    },
    "photoTaken": {
      "ui:autofocus": true,
      "ui:widget": "radio"
    }
  }
};


const table = _createRxCollection({ database, name: "activities", schema, version: 1} )
//const theForm = () => ( <Form schema={schema} uiSchema={uiSchema} /> )

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <Form schema={schema} uiSchema={uiSchema} />
  );
};

export default ExploreContainer;
