/*
 * @Author: Caven
 * @Date: 2020-01-02 16:42:03
 * @Last Modified by: Caven
 * @Last Modified time: 2020-05-12 10:44:45
 */

import State from '../state/State'
import Layer from './Layer'

const { Cesium } = DC.Namespace

/**
 * The vector layer is used to add various enitity, which is essentially a CustomDataSource
 * that is used to place entities of the same class or business attribute into the same layer
 */
class VectorLayer extends Layer {
  constructor(id) {
    super(id)
    this._delegate = new Cesium.CustomDataSource(id)
    this.type = Layer.getLayerType('vector')
    this._state = State.INITIALIZED
  }

  clear() {
    this._delegate.entities && this._delegate.entities.removeAll()
    this._cache = {}
    this._state = State.CLEARED
    return this
  }
}

Layer.registerType('vector')

export default VectorLayer
