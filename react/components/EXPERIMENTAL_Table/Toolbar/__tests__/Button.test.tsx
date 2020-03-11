import React from 'react'
import { render } from '@testing-library/react'

import Button, { ButtonSize, ButtonVariation } from '../Button'

describe('Table V2 @ Toolbar/Button spec', () => {
  const basicProps = {
    id: 'id',
    testId: 'testId',
    label: 'label',
    title: 'title',
    onClick: () => {},
  }
  it('matches snapshot with and without icon', () => {
    const icon = <div>Icon</div>
    const button = render(
      <>
        <Button {...basicProps}>basic</Button>
        <Button {...basicProps} icon={icon}>
          withIcon
        </Button>
      </>
    )
    expect(button.asFragment()).toMatchSnapshot()
  })
  it('matches snapshot with different states', () => {
    const button = render(
      <>
        <Button {...basicProps} isLoading>
          loading
        </Button>
        <Button {...basicProps} disabled>
          disabled
        </Button>
      </>
    )
    expect(button.asFragment()).toMatchSnapshot()
  })
  it('matches snapshot on all the sizes', () => {
    const button = render(
      <>
        <Button {...basicProps} size={ButtonSize.Small}>
          Testing small
        </Button>
        <Button {...basicProps} size={ButtonSize.Regular}>
          Testing regular
        </Button>
        <Button {...basicProps} size={ButtonSize.Large}>
          Testing large
        </Button>
      </>
    )
    expect(button.asFragment()).toMatchSnapshot()
  })
  it('matches snapshot as group', () => {
    const basicProps = {
      id: 'id',
      testId: 'testId',
      label: 'label',
      onClick: () => {},
    }
    const button = render(
      <Button {...basicProps} isActiveOfGroup isGrouped isFirstOfGroup>
        Testing
      </Button>
    )
    expect(button.asFragment()).toMatchSnapshot()
  })
  it('matches snapshot on all variations', () => {
    const button = render(
      <>
        <Button {...basicProps} variation={ButtonVariation.Primary}>
          Testing Primary
        </Button>
        <Button {...basicProps} variation={ButtonVariation.Secondary}>
          Testing Secondary
        </Button>
        <Button {...basicProps} variation={ButtonVariation.Tertiary}>
          Testing Tertiary
        </Button>
      </>
    )
    expect(button.asFragment()).toMatchSnapshot()
  })
})