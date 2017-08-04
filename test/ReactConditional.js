import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

import { Conditional, If, Else } from '../src/ReactConditional'

describe("react-conditional", function(){
	context("<If /> element with true condition", function(){
		it("should render the child element of <If />", function(){
			const wrapper = mount(
				<Conditional>
					<If condition={true}>
						<div>If</div>
					</If>
				</Conditional>
			)
			expect(wrapper.containsMatchingElement(<div>If</div>)).to.equal(true)
		})

		it("should not render the child element of <Else />", function(){
			const wrapper = mount(
				<Conditional>
					<If condition={true}>
						<div>If</div>
					</If>
					<Else>
						<div>Else</div>
					</Else>
				</Conditional>
			)
			expect(wrapper.containsMatchingElement(<div>Else</div>)).to.equal(false)
		})

		context("multiple <If /> blocks", function(){
			it("should only render the child element of the first <If /> block with true condition", function(){
				const wrapper = mount(
					<Conditional>
						<If condition={false}>
							<div>If1</div>
						</If>
						<If condition={true}>
							<div>If2</div>
						</If>
						<If condition={true}>
							<div>If3</div>
						</If>
						<Else>
							<div>Else</div>
						</Else>
					</Conditional>
				)
				expect(wrapper.containsMatchingElement(<div>If1</div>)).to.equal(false)
				expect(wrapper.containsMatchingElement(<div>If2</div>)).to.equal(true)
				expect(wrapper.containsMatchingElement(<div>If3</div>)).to.equal(false)
			})
		})
	})

	context("<If /> element with false condition", function(){
		it("should not render the child element of  <If />", function(){
			const wrapper = mount(
				<Conditional>
					<If condition={false}>
						<div>If</div>
					</If>
				</Conditional>
			)
			expect(wrapper.containsMatchingElement(<div>If</div>)).to.equal(false)
		})

		it("should render the child element of <Else />", function(){
			const wrapper = mount(
				<Conditional>
					<If condition={false}>
						<div>If</div>
					</If>
					<Else>
						<div>Else</div>
					</Else>
				</Conditional>
			)
			expect(wrapper.containsMatchingElement(<div>Else</div>)).to.equal(true)
		})
	})
})