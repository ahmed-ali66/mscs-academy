'use client';

/**
 * TopicImage — Displays a real photo with attribution overlay
 * Used in lesson cards and lesson viewer title slide.
 */

import React, { useState } from 'react';
import { getTopicImageForTitle, type TopicImage as TopicImageData } from '@/lib/topic_images';

interface TopicImageProps {
  title: string;
  grade?: number;
  fallbackSubject?: string;
  className?: string;
  height?: number;
  showAttribution?: boolean;
  rounded?: boolean;
}

export function TopicImage({
  title,
  grade,
  fallbackSubject = 'general',
  className = '',
  height = 200,
  showAttribution = true,
  rounded = true,
}: TopicImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Get the best matching image
  let image: TopicImageData | null = getTopicImageForTitle(title);
  if (!image && grade) {
    // Try grade-level default
    const { getDefaultTopicImage } = require('@/lib/topic_images');
    image = getDefaultTopicImage(grade, fallbackSubject);
  }

  if (!image || imageError) {
    // Fallback: gradient placeholder with subject motif
    return (
      <div
        className={`bg-gradient-to-br from-[#0A4042] to-[#0F5C5E] flex items-center justify-center ${rounded ? 'rounded-xl' : ''} ${className}`}
        style={{ height: `${height}px` }}
        aria-label={title}
      >
        <div className="text-[#C68A2E] text-center px-4">
          <div className="text-3xl mb-2 opacity-60">📜</div>
          <div className="text-xs opacity-80" style={{ fontFamily: 'var(--font-serif)' }}>{title}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${rounded ? 'rounded-xl' : ''} ${className}`} style={{ height: `${height}px` }}>
      {/* Loading skeleton */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--muted)] to-[var(--card)] animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[var(--bronze)] border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Actual image */}
      <img
        src={image.url}
        alt={image.title || title}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        className="w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: imageLoaded ? 1 : 0 }}
      />

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

      {/* Attribution overlay (bottom) */}
      {showAttribution && imageLoaded && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-[9px] text-white/70 leading-tight">
            {image.title.length > 50 ? image.title.substring(0, 50) + '...' : image.title}
            {' · '}
            <a
              href={image.original_url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/90"
              title={`${image.source} · ${image.license}${image.artist ? ' · ' + image.artist : ''}`}
            >
              {image.license}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}
