"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Command;
(function (Command) {
    /**
       * <code>COMMAND_UNKNOW = 0;</code>
       */
    Command[Command["COMMAND_UNKNOW"] = 0] = "COMMAND_UNKNOW";
    /**
       * <pre>
       * 握手请求，含http的websocket握手请求
       * </pre>
       *
       * <code>COMMAND_HANDSHAKE_REQ = 1;</code>
       */
    Command[Command["COMMAND_HANDSHAKE_REQ"] = 1] = "COMMAND_HANDSHAKE_REQ";
    /**
       * <pre>
       * 握手响应，含http的websocket握手响应
       * </pre>
       *
       * <code>COMMAND_HANDSHAKE_RESP = 2;</code>
       */
    Command[Command["COMMAND_HANDSHAKE_RESP"] = 2] = "COMMAND_HANDSHAKE_RESP";
    /**
       * <pre>
       *鉴权请求
       * </pre>
       *
       * <code>COMMAND_AUTH_REQ = 3;</code>
       */
    Command[Command["COMMAND_AUTH_REQ"] = 3] = "COMMAND_AUTH_REQ";
    /**
       * <pre>
       * 鉴权响应
       * </pre>
       *
       * <code>COMMAND_AUTH_RESP = 4;</code>
       */
    Command[Command["COMMAND_AUTH_RESP"] = 4] = "COMMAND_AUTH_RESP";
    /**
       * <pre>
       *申请进入群组
       * </pre>
       *
       * <code>COMMAND_JOIN_GROUP_REQ = 5;</code>
       */
    Command[Command["COMMAND_JOIN_GROUP_REQ"] = 5] = "COMMAND_JOIN_GROUP_REQ";
    /**
       * <pre>
       *申请进入群组响应
       * </pre>
       *
       * <code>COMMAND_JOIN_GROUP_RESP = 6;</code>
       */
    Command[Command["COMMAND_JOIN_GROUP_RESP"] = 6] = "COMMAND_JOIN_GROUP_RESP";
    /**
       * <pre>
       *进入群组通知
       * </pre>
       *
       * <code>COMMAND_JOIN_GROUP_NOTIFY_RESP = 7;</code>
       */
    Command[Command["COMMAND_JOIN_GROUP_NOTIFY_RESP"] = 7] = "COMMAND_JOIN_GROUP_NOTIFY_RESP";
    /**
       * <pre>
       *退出群组通知
       * </pre>
       *
       * <code>COMMAND_EXIT_GROUP_NOTIFY_RESP = 8;</code>
       */
    Command[Command["COMMAND_EXIT_GROUP_NOTIFY_RESP"] = 8] = "COMMAND_EXIT_GROUP_NOTIFY_RESP";
    /**
       * <pre>
       *聊天请求
       * </pre>
       *
       * <code>COMMAND_CHAT_REQ = 9;</code>
       */
    Command[Command["COMMAND_CHAT_REQ"] = 9] = "COMMAND_CHAT_REQ";
    /**
       * <pre>
       *聊天响应
       * </pre>
       *
       * <code>COMMAND_CHAT_RESP = 10;</code>
       */
    Command[Command["COMMAND_CHAT_RESP"] = 10] = "COMMAND_CHAT_RESP";
    /**
       * <pre>
       *下面的还没实现 start
       * </pre>
       *
       * <code>COMMAND_START_SHOW_REQ = 11;</code>
       */
    Command[Command["COMMAND_START_SHOW_REQ"] = 11] = "COMMAND_START_SHOW_REQ";
    /**
       * <pre>
       *开播响应
       * </pre>
       *
       * <code>COMMAND_START_SHOW_RESP = 12;</code>
       */
    Command[Command["COMMAND_START_SHOW_RESP"] = 12] = "COMMAND_START_SHOW_RESP";
    /**
       * <pre>
       *停播请求
       * </pre>
       *
       * <code>COMMAND_END_SHOW_REQ = 13;</code>
       */
    Command[Command["COMMAND_END_SHOW_REQ"] = 13] = "COMMAND_END_SHOW_REQ";
    /**
       * <pre>
       *停播通知
       * </pre>
       *
       * <code>COMMAND_END_SHOW_NOTIFY_RESP = 14;</code>
       */
    Command[Command["COMMAND_END_SHOW_NOTIFY_RESP"] = 14] = "COMMAND_END_SHOW_NOTIFY_RESP";
    /**
       * <pre>
       *上面的还没实现  end
       * </pre>
       *
       * <code>COMMAND_HEARTBEAT_REQ = 15;</code>
       */
    Command[Command["COMMAND_HEARTBEAT_REQ"] = 15] = "COMMAND_HEARTBEAT_REQ";
    /**
       * <pre>
       *心跳响应
       * </pre>
       *
       * <code>COMMAND_HEARTBEAT_RESP = 16;</code>
       */
    Command[Command["COMMAND_HEARTBEAT_RESP"] = 16] = "COMMAND_HEARTBEAT_RESP";
    /**
       * <pre>
       *关闭请求
       * </pre>
       *
       * <code>COMMAND_CLOSE_REQ = 17;</code>
       */
    Command[Command["COMMAND_CLOSE_REQ"] = 17] = "COMMAND_CLOSE_REQ";
    /**
       * <pre>
       *分页请求Client列表
       * </pre>
       *
       * <code>COMMAND_CLIENT_PAGE_REQ = 18;</code>
       */
    Command[Command["COMMAND_CLIENT_PAGE_REQ"] = 18] = "COMMAND_CLIENT_PAGE_REQ";
    /**
       * <pre>
       *返回Client列表
       * </pre>
       *
       * <code>COMMAND_CLIENT_PAGE_RESP = 19;</code>
       */
    Command[Command["COMMAND_CLIENT_PAGE_RESP"] = 19] = "COMMAND_CLIENT_PAGE_RESP";
    /**
       * <pre>
       *登录请求
       * </pre>
       *
       * <code>COMMAND_LOGIN_REQ = 20;</code>
       */
    Command[Command["COMMAND_LOGIN_REQ"] = 20] = "COMMAND_LOGIN_REQ";
    /**
       * <pre>
       *登录响应
       * </pre>
       *
       * <code>COMMAND_LOGIN_RESP = 21;</code>
       */
    Command[Command["COMMAND_LOGIN_RESP"] = 21] = "COMMAND_LOGIN_RESP";
    /**
       * <pre>
       *发出撤消消息指令(管理员可以撤消所有人的消息，自己可以撤消自己的消息)
       * </pre>
       *
       * <code>COMMAND_CANCEL_MSG_REQ = 22;</code>
       */
    Command[Command["COMMAND_CANCEL_MSG_REQ"] = 22] = "COMMAND_CANCEL_MSG_REQ";
    /**
       * <pre>
       *收到撤消消息指令
       * </pre>
       *
       * <code>COMMAND_CANCEL_MSG_RESP = 23;</code>
       */
    Command[Command["COMMAND_CANCEL_MSG_RESP"] = 23] = "COMMAND_CANCEL_MSG_RESP";
    Command[Command["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Command = exports.Command || (exports.Command = {}));
//# sourceMappingURL=Command.js.map