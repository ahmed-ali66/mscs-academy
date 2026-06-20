'use client';

/**
 * TopicImage — Displays a real photo with attribution overlay.
 * Fixed: handles cached images correctly (onLoad doesn't fire for cached images).
 */

import React, { useState, useRef, useEffect } from 'react';
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
  const imgRef = useRef<HTMLImageElement>(null);

  // Get the best matching image
  let image: TopicImageData | null = getTopicImageForTitle(title);
  if (!image && grade) {
    const { getDefaultTopicImage } = require('@/lib/topic_images');
    image = getDefaultTopicImage(grade, fallbackSubject);
  }

  // CRITICAL FIX: Check if image is already complete (cached) on mount.
  // The onLoad event doesn't fire for cached images, so without this check,
  // imageLoaded stays false and the image remains at opacity: 0 (invisible).
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setImageLoaded(true);
    }
  }, [image?.url]);

  if (!image || imageError) {
    // Fallback: gradient placeholder with subject emoji
    return (
      <div
        className={`bg-gradient-to-br from-[#0A4042] to-[#0F5C5E] flex items-center justify-center ${rounded ? 'rounded-xl' : ''} ${className}`}
        style={{ height: `${height}px` }}
        aria-label={title}
      >
        <div className="text-[#C68A2E] text-center px-4">
          <div className="text-3xl mb-2 opacity-60">
            {fallbackSubject === 'history' ? '📜' :
             fallbackSubject === 'geography' ? '🧭' :
             fallbackSubject === 'civics' ? '⚖️' :
             fallbackSubject === 'ethics' ? '🏮' :
             fallbackSubject === 'uae_heritage' ? '🦅' :
             fallbackSubject === 'economics' ? '💱' :
             fallbackSubject === 'sociology' ? '👥' : '📖'}
          </div>
          <div className="text-xs opacity-80" style={{ fontFamily: 'var(--font-serif)' }}>{title}</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${rounded ? 'rounded-xl' : ''} ${className}`} style={{ height: `${height}px` }}>
      {/* Loading skeleton — only shown until image is confirmed loaded */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--muted)] to-[var(--card)] animate-pulse flex items-center justify-center z-10">
          <div className="w-8 h-8 border-2 border-[var(--bronze)] border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Actual image — always rendered, opacity transitions when loaded */}
      <img
        ref={imgRef}
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
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
          <p className="text-[9px] text-white/70 leading-tight">
            {image.title.length > 50 ? image.title.substring(0, 50) + '...' : image.title}
            {' · '}
            <a
              href={image.original_url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/90 pointer-events-auto"
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
