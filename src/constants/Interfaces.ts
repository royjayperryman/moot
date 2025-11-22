// ==============================================
// Core Types
// ==============================================

export type UserId = string;

// ==============================================
// User and Profile
// ==============================================

export interface User {
  id: UserId;
  email: string;
  phone?: string;
  passwordHash: string;
  createdAt: string;
  status: 'active' | 'suspended' | 'deleted';
  lastActiveAt: string | null;
}

export interface Profile {
  userId: UserId;
  displayName: string;
  age: number;
  genderIdentity: 'man' | 'woman' | 'nonbinary' | 'other';
  pronouns?: string;
  orientation: 'gay' | 'bi' | 'straight' | 'queer' | 'other';
  bio?: string;
  heightCm?: number;
  occupation?: string;
  city: string;
  country: string;

  relationshipIntent: 'long_term' | 'short_term' | 'friends' | 'open';
  wantsKids?: 'yes' | 'no' | 'maybe';
  politics?: 'left' | 'center' | 'right' | 'prefer_not_say';
  religion?: string;

  createdAt: string;
  updatedAt: string;
}

// ==============================================
// Photos
// ==============================================

export interface Photo {
  id: string;
  userId: UserId;
  url: string;
  order: number;
  isPrivate: boolean;
  isVerifiedSelfie: boolean;
  createdAt: string;
}

// ==============================================
// Discovery and Preferences
// ==============================================

export interface DiscoverySettings {
  userId: UserId;
  showMeGenders: string[];
  minAge: number;
  maxAge: number;
  maxDistanceKm: number;

  useCurrentLocation: boolean;
  latitude?: number;
  longitude?: number;

  intentsAllowed?: ('long_term' | 'short_term' | 'friends' | 'open')[];
  mustWantKids?: boolean | null;

  discoverable: boolean;
  updatedAt: string;
}

export interface MatchPreferences {
  userId: UserId;
  hardFilters: {
    minAge?: number;
    maxAge?: number;
    maxDistanceKm?: number;
    requireSameOrientation?: boolean;
    requireNonSmoker?: boolean;
    requireWantsKids?: boolean;
  };
  softPreferences: {
    politics?: { preferred: string[]; weight: number };
    religion?: { preferred: string[]; weight: number };
    fitnessLevel?: { preferred: 'low' | 'medium' | 'high'; weight: number };
    socialLevel?: {
      preferred: 'introvert' | 'ambivert' | 'extrovert';
      weight: number;
    };
  };
  updatedAt: string;
}

// ==============================================
// Interests and Prompts
// ==============================================

export interface Interest {
  id: string;
  key: string;
  label: string;
  category?: string;
}

export interface ProfileInterest {
  userId: UserId;
  interestId: string;
  importance: 'low' | 'medium' | 'high';
}

export interface Prompt {
  id: string;
  key: string;
  body: string;
  category: 'fun' | 'values' | 'dating';
}

export interface PromptAnswer {
  id: string;
  userId: UserId;
  promptId: string;
  answerText: string;
  visibility: 'public' | 'friends_only';
  createdAt: string;
  updatedAt: string;
}

// ==============================================
// Personality
// ==============================================

export interface PersonalityProfile {
  userId: UserId;
  style: 'mbti' | 'big5' | 'custom';
  data: Record<string, number>;
  updatedAt: string;
}

// ==============================================
// Actions, Swipes, and Matches
// ==============================================

export type SwipeActionType = 'like' | 'pass' | 'superlike';

export interface SwipeAction {
  id: string;
  actorId: UserId;
  targetId: UserId;
  type: SwipeActionType;
  createdAt: string;

  actorAge: number;
  targetAge: number;
  distanceKm: number;

  context: {
    entryPoint: 'discovery' | 'boost' | 'recs';
    algorithmVersion: string;
    positionInStack: number;
  };
}

export interface Match {
  id: string;
  userAId: UserId;
  userBId: UserId;
  createdAt: string;
  lastActivityAt: string;
  status: 'active' | 'unmatched' | 'blocked';
  unmatchedBy?: UserId | null;
}

export interface Block {
  id: string;
  blockerId: UserId;
  blockedId: UserId;
  createdAt: string;
}

export interface Report {
  id: string;
  reporterId: UserId;
  reportedId: UserId;
  reasonCode: 'spam' | 'harassment' | 'fake_profile' | 'other';
  description?: string;
  createdAt: string;
  status: 'open' | 'reviewing' | 'resolved' | 'dismissed';
  resolvedByAdminId?: string;
  resolvedAt?: string;
}

// ==============================================
// Messaging
// ==============================================

export type ConversationId = string;

export interface Conversation {
  id: ConversationId;
  matchId: string;
  userAId: UserId;
  userBId: UserId;
  createdAt: string;
  lastMessageAt: string | null;
  lastMessage: string | null;
}

export interface Message {
  id: string;
  conversationId: ConversationId;
  senderId: UserId;
  body: string | null;
  type: 'text' | 'image' | 'voice' | 'system';
  attachmentUrl?: string;
  createdAt: string;

  seenByUserAAt?: string;
  seenByUserBAt?: string;
}

export interface MessageReaction {
  messageId: string;
  userId: UserId;
  emoji: string;
  createdAt: string;
}

// ==============================================
// Location and Device Signals
// ==============================================

export interface UserLocationSnapshot {
  id: string;
  userId: UserId;
  latitude: number;
  longitude: number;
  accuracyMeters: number;
  createdAt: string;
  source: 'gps' | 'ip_geolocation';
}

// ==============================================
// Monetization
// ==============================================

export interface Subscription {
  id: string;
  userId: UserId;
  productId: string;
  platform: 'ios' | 'android' | 'web';
  status: 'active' | 'expired' | 'canceled';
  startedAt: string;
  expiresAt: string;
}

export interface BoostUsage {
  id: string;
  userId: UserId;
  type: 'boost' | 'superboost';
  startedAt: string;
  endsAt: string;
}

// ==============================================
// Feature Flags
// ==============================================

export interface FeatureFlagAssignment {
  userId: UserId;
  flagKey: string;
  variant: 'control' | 'a' | 'b' | 'c';
  assignedAt: string;
}

// ==============================================
// Embeddings and Stats
// ==============================================

export interface UserEmbedding {
  userId: UserId;
  kind: 'bio' | 'interests' | 'full_profile';
  vector: number[];
  modelVersion: string;
  updatedAt: string;
}

export interface UserStats {
  userId: UserId;
  dailyLikesGiven: number;
  dailyLikesReceived: number;
  totalMatches: number;
  totalMessagesSent: number;
  lastMatchAt?: string;
  lastMessageAt?: string;
  updatedAt: string;
}
