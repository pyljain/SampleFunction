/*
* Copyright 2019 Google LLC

* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at

*     https://www.apache.org/licenses/LICENSE-2.0

* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

exports.index = async (data, context) => {

  const {Storage} = require('@google-cloud/storage')
  const request = require('request-promise')
  // const path = require('path');
  // const fs = require('fs-extra');
  // const os = require('os')
  
  // Creates a GCS client
  const storage = new Storage()

  // const workingDir = path.join(os.tmpdir(), 'scratch')
  // await fs.ensureDir(workingDir)
   
  const file = data
  console.log(`  Event ${context.eventId}`)
  console.log(`  Event Type: ${context.eventType}`)
  console.log(`  Bucket: ${file.bucket}`)
  console.log(`  File: ${file.name}`)
  // console.log(`  Metageneration: ${file.metageneration}`)
  // console.log(`  Created: ${file.timeCreated}`)
  // console.log(`  Updated: ${file.updated}`)
  // console.log(`FILE BODY`, file)
  //const tempLocalPath = path.join(workingDir, file.name)

  // const fileoptions = {
  //   // The path to which the file should be downloaded, e.g. "./file.txt"
  //   destination: `tempLocalPath`
  // }
  
  //Downloads the file
  // const content = await storage
  //   .bucket(file.bucket)
  //   .file(file.name)
  //   .download(fileoptions)

  // console.log('CONTENT', content.toString())

  let options = {
    method: 'POST',
    uri: '',
    body: {
      location: `gs://${file.bucket}/${file.name}`,
      filename: `${file.name}`,
      bucketname: `${file.bucket}`
    },
    json: true
  }

  try {
    const res = await request(options)
      console.log(`VIRUS SCAN REQUESTED FOR FILE: ${file.name}`)
  } catch(e) {
    console.error(`ERROR OCCURED WHEN REQUESTING A SCAN FOR ${file.name}`, e)
  }

}