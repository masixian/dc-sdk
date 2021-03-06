/*
 * @Author: Caven
 * @Date: 2020-04-24 14:43:39
 * @Last Modified by: Caven
 * @Last Modified time: 2020-05-15 08:58:38
 */

import Transform from '../transform/Transform'
import Position from '../position/Position'

const { Cesium } = DC.Namespace

export default function center(positions) {
  if (positions && Array.isArray(positions)) {
    let boundingSphere = Cesium.BoundingSphere.fromPoints(
      Transform.transformWGS84ArrayToCartesianArray(positions)
    )
    return Transform.transformCartesianToWGS84(boundingSphere.center)
  }

  return new Position()
}
