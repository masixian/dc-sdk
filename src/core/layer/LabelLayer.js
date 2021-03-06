/*
 * @Author: Caven
 * @Date: 2020-03-30 17:14:00
 * @Last Modified by: Caven
 * @Last Modified time: 2020-05-12 10:42:03
 */

import { Label } from '../overlay'
import State from '../state/State'
import Layer from './Layer'

const { Cesium } = DC.Namespace

class LabelLayer extends Layer {
  constructor(id, url) {
    if (!url) {
      throw new Error('LabelLayer：the url invalid')
    }
    super(id)
    this._dataSource = Cesium.GeoJsonDataSource.load(url)
    this._delegate = new Cesium.CustomDataSource(id)
    this._initLabel()
    this.type = Layer.registerType('label')
    this._state = State.INITIALIZED
  }

  _createLabel(entity) {
    if (entity.position && item.name) {
      return Label.fromEntity(entity)
    }
  }

  _initLabel() {
    this._dataSource.then(dataSource => {
      let entities = dataSource.entities.values
      entities.forEach(item => {
        let lable = this._createLabel(item)
        this.addOverlay(lable)
      })
    })
  }
}

Layer.registerType('label')

export default LabelLayer
