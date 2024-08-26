type TNotificationBarProps = {
  message: string
}

const NotificationBar = (props: TNotificationBarProps) => {
  const { message } = props
  return (
    <div className="bg-primary-light min-h-[40px] flex items-center justify-center">
      <p className="text-secondary-light text-sm font-normal">{message}</p>
    </div>
  )
}

export { NotificationBar }
export default NotificationBar
