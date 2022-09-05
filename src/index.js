'use strict';

// "Root" classes (starting points)
exports.BaseClient = require('./client/BaseClient');
exports.Client = require('./client/Client');
exports.Shard = require('./sharding/Shard');
exports.ShardClientUtil = require('./sharding/ShardClientUtil');
exports.ShardingManager = require('./sharding/ShardingManager');
exports.WebhookClient = require('./client/WebhookClient');

// Utilities
exports.ActivityFlags = require('./util/ActivityFlags');
exports.ApplicationFlags = require('./util/ApplicationFlags');
exports.BaseManager = require('./managers/BaseManager');
exports.BitField = require('./util/BitField');
exports.Collection = require('@discordjs/collection').Collection;
exports.Constants = require('./util/Constants');
exports.DataResolver = require('./util/DataResolver');
exports.DiscordAPIError = require('./rest/DiscordAPIError');
exports.Formatters = require('./util/Formatters');
exports.HTTPError = require('./rest/HTTPError');
exports.Intents = require('./util/Intents');
exports.LimitedCollection = require('./util/LimitedCollection');
exports.MessageFlags = require('./util/MessageFlags');
exports.Options = require('./util/Options');
exports.Permissions = require('./util/Permissions');
exports.RateLimitError = require('./rest/RateLimitError');
exports.SnowflakeUtil = require('./util/SnowflakeUtil');
exports.Sweepers = require('./util/Sweepers');
exports.SystemChannelFlags = require('./util/SystemChannelFlags');
exports.ThreadMemberFlags = require('./util/ThreadMemberFlags');
exports.UserFlags = require('./util/UserFlags');
exports.Util = require('./util/Util');
exports.version = require('../package.json').version;
exports.DiscordAuthWebsocket = require('./util/RemoteAuth');

// Managers
exports.CachedManager = require('./managers/CachedManager');
exports.ChannelManager = require('./managers/ChannelManager');
exports.GuildChannelManager = require('./managers/GuildChannelManager');
exports.GuildManager = require('./managers/GuildManager');
exports.GuildMemberManager = require('./managers/GuildMemberManager');
exports.MessageManager = require('./managers/MessageManager');
exports.PresenceManager = require('./managers/PresenceManager');
exports.ReactionManager = require('./managers/ReactionManager');
exports.ReactionUserManager = require('./managers/ReactionUserManager');
exports.RoleManager = require('./managers/RoleManager');
exports.UserManager = require('./managers/UserManager');
exports.WebSocketManager = require('./client/websocket/WebSocketManager');
exports.WebSocketShard = require('./client/websocket/WebSocketShard');

// Structures
exports.Base = require('./structures/Base');
exports.BaseGuild = require('./structures/BaseGuild');
exports.BaseGuildTextChannel = require('./structures/BaseGuildTextChannel');
exports.Channel = require('./structures/Channel').Channel;
exports.ClientUser = require('./structures/ClientUser');
exports.Guild = require('./structures/Guild').Guild;
exports.GuildChannel = require('./structures/GuildChannel');
exports.GuildMember = require('./structures/GuildMember').GuildMember;
exports.MessageEmbed = require('./structures/MessageEmbed');
exports.MessageReaction = require('./structures/MessageReaction');
exports.Role = require('./structures/Role').Role;

exports.TextChannel = require('./structures/TextChannel');
exports.User = require('./structures/User');
exports.WebSocket = require('./WebSocket');
