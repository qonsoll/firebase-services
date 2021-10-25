import _ from 'lodash'

const removeUndef = (withoutUndef: boolean, data: object): object =>
  withoutUndef ? _.omitBy(data, _.isNil) : data

export default removeUndef
