export enum Command {
  /**
	 * <code>COMMAND_UNKNOW = 0;</code>
	 */
  COMMAND_UNKNOW = 0,
  /**
	 * <pre>
	 * 握手请求，含http的websocket握手请求
	 * </pre>
	 *
	 * <code>COMMAND_HANDSHAKE_REQ = 1;</code>
	 */
  COMMAND_HANDSHAKE_REQ = 1,
  /**
	 * <pre>
	 * 握手响应，含http的websocket握手响应
	 * </pre>
	 *
	 * <code>COMMAND_HANDSHAKE_RESP = 2;</code>
	 */
  COMMAND_HANDSHAKE_RESP = 2,
  /**
	 * <pre>
	 *鉴权请求
	 * </pre>
	 *
	 * <code>COMMAND_AUTH_REQ = 3;</code>
	 */
  COMMAND_AUTH_REQ = 3,
  /**
	 * <pre>
	 * 鉴权响应
	 * </pre>
	 *
	 * <code>COMMAND_AUTH_RESP = 4;</code>
	 */
  COMMAND_AUTH_RESP = 4,
  /**
	 * <pre>
	 *申请进入群组
	 * </pre>
	 *
	 * <code>COMMAND_JOIN_GROUP_REQ = 5;</code>
	 */
  COMMAND_JOIN_GROUP_REQ = 5,
  /**
	 * <pre>
	 *申请进入群组响应
	 * </pre>
	 *
	 * <code>COMMAND_JOIN_GROUP_RESP = 6;</code>
	 */
  COMMAND_JOIN_GROUP_RESP = 6,
  /**
	 * <pre>
	 *进入群组通知
	 * </pre>
	 *
	 * <code>COMMAND_JOIN_GROUP_NOTIFY_RESP = 7;</code>
	 */
  COMMAND_JOIN_GROUP_NOTIFY_RESP = 7,
  /**
	 * <pre>
	 *退出群组通知
	 * </pre>
	 *
	 * <code>COMMAND_EXIT_GROUP_NOTIFY_RESP = 8;</code>
	 */
  COMMAND_EXIT_GROUP_NOTIFY_RESP = 8,
  /**
	 * <pre>
	 *聊天请求
	 * </pre>
	 *
	 * <code>COMMAND_CHAT_REQ = 9;</code>
	 */
  COMMAND_CHAT_REQ = 9,
  /**
	 * <pre>
	 *聊天响应
	 * </pre>
	 *
	 * <code>COMMAND_CHAT_RESP = 10;</code>
	 */
  COMMAND_CHAT_RESP = 10,
  /**
	 * <pre>
	 *下面的还没实现 start
	 * </pre>
	 *
	 * <code>COMMAND_START_SHOW_REQ = 11;</code>
	 */
  COMMAND_START_SHOW_REQ = 11,
  /**
	 * <pre>
	 *开播响应
	 * </pre>
	 *
	 * <code>COMMAND_START_SHOW_RESP = 12;</code>
	 */
  COMMAND_START_SHOW_RESP = 12,
  /**
	 * <pre>
	 *停播请求
	 * </pre>
	 *
	 * <code>COMMAND_END_SHOW_REQ = 13;</code>
	 */
  COMMAND_END_SHOW_REQ = 13,
  /**
	 * <pre>
	 *停播通知
	 * </pre>
	 *
	 * <code>COMMAND_END_SHOW_NOTIFY_RESP = 14;</code>
	 */
  COMMAND_END_SHOW_NOTIFY_RESP = 14,
  /**
	 * <pre>
	 *上面的还没实现  end
	 * </pre>
	 *
	 * <code>COMMAND_HEARTBEAT_REQ = 15;</code>
	 */
  COMMAND_HEARTBEAT_REQ = 15,
  /**
	 * <pre>
	 *心跳响应
	 * </pre>
	 *
	 * <code>COMMAND_HEARTBEAT_RESP = 16;</code>
	 */
  COMMAND_HEARTBEAT_RESP = 16,
  /**
	 * <pre>
	 *关闭请求
	 * </pre>
	 *
	 * <code>COMMAND_CLOSE_REQ = 17;</code>
	 */
  COMMAND_CLOSE_REQ = 17,
  /**
	 * <pre>
	 *分页请求Client列表
	 * </pre>
	 *
	 * <code>COMMAND_CLIENT_PAGE_REQ = 18;</code>
	 */
  COMMAND_CLIENT_PAGE_REQ = 18,
  /**
	 * <pre>
	 *返回Client列表
	 * </pre>
	 *
	 * <code>COMMAND_CLIENT_PAGE_RESP = 19;</code>
	 */
  COMMAND_CLIENT_PAGE_RESP = 19,
  /**
	 * <pre>
	 *登录请求
	 * </pre>
	 *
	 * <code>COMMAND_LOGIN_REQ = 20;</code>
	 */
  COMMAND_LOGIN_REQ = 20,
  /**
	 * <pre>
	 *登录响应
	 * </pre>
	 *
	 * <code>COMMAND_LOGIN_RESP = 21;</code>
	 */
  COMMAND_LOGIN_RESP = 21,
  /**
	 * <pre>
	 *发出撤消消息指令(管理员可以撤消所有人的消息，自己可以撤消自己的消息)
	 * </pre>
	 *
	 * <code>COMMAND_CANCEL_MSG_REQ = 22;</code>
	 */
  COMMAND_CANCEL_MSG_REQ = 22,
  /**
	 * <pre>
	 *收到撤消消息指令
	 * </pre>
	 *
	 * <code>COMMAND_CANCEL_MSG_RESP = 23;</code>
	 */
  COMMAND_CANCEL_MSG_RESP = 23,
  UNRECOGNIZED = -1
}
