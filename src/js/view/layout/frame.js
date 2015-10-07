/**
 * @fileoverview Frame Base
 * @author NHN Ent. FE Development Team
 */
'use strict';

var View = require('../../base/view');
var Header = require('./header');
var Body = require('./body');

/**
 * frame Base 클래스
 * @module view/layout/frame
 */
var Frame = View.extend(/**@lends module:view/layout/frame.prototype */{
    /**
     * @constructs
     * @extends module:base/view
     * @param {Object} options Options
     *      @param {String} [options.whichSide='R']  어느 영역의 frame 인지 여부.
     */
    initialize: function(options) {
        View.prototype.initialize.apply(this, arguments);
        this.listenTo(this.grid.renderModel, 'columnModelChanged', this.render, this)
            .listenTo(this.grid.dimensionModel, 'columnWidthChanged', this._onColumnWidthChanged, this);

        this.setOwnProperties({
            header: null,
            body: null,
            whichSide: options && options.whichSide || 'R'
        });
    },

    tagName: 'div',

    className: 'lside_area',

    /**
     * 랜더링 메서드
     * @return {View.Layout.Frame} This object
     */
    render: function() {
        var header,
            body;
        this.destroyChildren();
        this.beforeRender();

        header = this.header = this.createView(Header, {
            grid: this.grid,
            whichSide: this.whichSide
        });
        body = this.body = this.createView(Body, {
            grid: this.grid,
            whichSide: this.whichSide
        });

        this.$el
            .append(header.render().el)
            .append(body.render().el);

        this.afterRender();
        return this;
    },
    /**
     * columnModel change 시 수행되는 핸들러 스켈레톤
     * @private
     */
    _onColumnWidthChanged: function() {},
    /**
     * 랜더링 하기전에 수행하는 함수 스켈레톤
     */
    beforeRender: function() {},
    /**
     * 랜더링 이후 수행하는 함수 스켈레톤
     */
    afterRender: function() {}
});

module.exports = Frame;