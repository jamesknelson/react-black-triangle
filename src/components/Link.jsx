equal = require('deep-equal')
React = require('react')
Reflux = require('reflux')
routes = require('../../routes')
AppStore = require('../../stores/AppStore')


isLeftClickEvent = (event) ->
  event.button == 0

isModifiedEvent = (event) ->
  !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)


module.exports = React.createClass
  mixins: [
    Reflux.listenTo(AppStore, "onRouteChange")
  ]

  propTypes:
    activeClassName: React.PropTypes.string.isRequired
    to: React.PropTypes.string.isRequired
    params: React.PropTypes.object
    query: React.PropTypes.object

  getDefaultProps: ->
    activeClassName: 'active'

  getInitialState: ->
    currentRoute: AppStore.getCurrentRoute()

  onRouteChange: ->
    @setState(@getInitialState())

  isActive: ->
    stateParts = @state.currentRoute.name.split('.')
    propsParts = @props.to.split('.')

    equal(stateParts.slice(0, propsParts.length), propsParts) and
    (!@props.params or equal(@state.currentRoute.params, @props.params))

  render: ->
    activeClassName = if @isActive() then @props.activeClassName+' ' else ''

    linkOptions = Object.assign {}, @props, 
      href: '#'+routes.makePath(@props.to, @props.params)
      className: 'Link ' + activeClassName + (@props.className ? '')

    React.DOM.a(linkOptions, @props.children);
