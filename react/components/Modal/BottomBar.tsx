import React, { forwardRef } from 'react'
import classNames from 'classnames'

export interface BottomBarProps {
  showBorder?: boolean
  responsiveFullScreen?: boolean
  children?: React.ReactNode
  size: 'small' | 'medium' | 'large'
}

const BottomBar = forwardRef<HTMLDivElement, Props>(function BottomBar(
  { showBorder, responsiveFullScreen, children },
  forwardedRef
) {
  if (!children) return <></>
  return (
    <div
      className={classNames(
        'flex justify-content flex-row-reverse min-h-regular-ns min-h-small pv6-ns ph8-ns pv7 ph6',
        {
          'bt b--muted-4': showBorder,
          pb7: responsiveFullScreen,
        }
      )}
      style={responsiveFullScreen ? { marginTop: 'auto' } : {}}
      ref={forwardedRef}
    >
      {children}
    </div>
  )
})

export default BottomBar
