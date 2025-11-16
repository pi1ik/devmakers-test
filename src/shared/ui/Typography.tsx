"use client";

import styled from "@emotion/styled";
import { motion } from "motion/react";
import { mediaQueries } from "@/src/shared/utils/breakpoints";

/* Mobile: 1.75rem (28px) */
/* Tablet: 2.5rem (40px) */
/* Desktop: 3.5rem (56px) */
/* Wide: 4rem (64px) */

/**
 * Universal page heading component without motion
 * Responsive typography that scales across all breakpoints
 */

/**
 * Universal page heading component with motion animation capability
 * Responsive typography that scales across all breakpoints
 */

/**
 * Section heading component (h2) without motion
 * Slightly smaller than page heading
 */

/**
 * Section heading component (h2) with motion animation capability
 * Slightly smaller than page heading
 */

/**
 * Gradient text component for accent words
 */

/**
 * Page description component without motion
 * Responsive typography for subtitle/description text
 */

/**
 * Page description component with motion animation capability
 * Responsive typography for subtitle/description text
 */

/**
 * Section description component without motion
 * Slightly smaller max-width for section descriptions
 */

/**
 * Section description component with motion animation capability
 * Slightly smaller max-width for section descriptions
 */

export const PageHeading = styled.h1`
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--foreground);
  margin-bottom: 1.5rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;

  font-size: 2rem;

  ${mediaQueries.tablet} {
    font-size: 3.5rem;
  }

  ${mediaQueries.desktop} {
    font-size: 4.25rem;
  }

  ${mediaQueries.wide} {
    font-size: 5rem;
  }
`;

export const MotionPageHeading = styled(motion.h1)`
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--foreground);
  margin-bottom: 1.5rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;

  font-size: 2rem;

  ${mediaQueries.tablet} {
    font-size: 3.5rem;
  }

  ${mediaQueries.desktop} {
    font-size: 4.25rem;
  }

  ${mediaQueries.wide} {
    font-size: 5rem;
  }
`;

export const SectionHeading = styled.h2`
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--foreground);
  margin-bottom: 1.5rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;

  font-size: 1.75rem;

  ${mediaQueries.tablet} {
    font-size: 2.5rem;
  }

  ${mediaQueries.desktop} {
    font-size: 3.5rem;
  }

  ${mediaQueries.wide} {
    font-size: 4rem;
  }
`;

export const MotionSectionHeading = styled(motion.h2)`
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--foreground);
  margin-bottom: 1.5rem;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;

  font-size: 1.75rem;

  ${mediaQueries.tablet} {
    font-size: 2.5rem;
  }

  ${mediaQueries.desktop} {
    font-size: 3.5rem;
  }

  ${mediaQueries.wide} {
    font-size: 4rem;
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(to right, var(--accent, #6366f1), #c084fc);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

export const PageDescription = styled.p`
  color: var(--muted-foreground);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 30rem;
  text-wrap: balance;

  font-size: 1rem;

  ${mediaQueries.tablet} {
    font-size: 1.125rem;
  }

  ${mediaQueries.desktop} {
    font-size: 1.25rem;
    max-width: 42rem;
  }
`;

export const MotionPageDescription = styled(motion.p)`
  color: var(--muted-foreground);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 30rem;
  text-wrap: balance;

  font-size: 1rem;

  ${mediaQueries.tablet} {
    font-size: 1.125rem;
  }

  ${mediaQueries.desktop} {
    font-size: 1.25rem;
    max-width: 42rem;
  }
`;

export const SectionDescription = styled.p`
  color: var(--muted-foreground);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 28rem;
  text-wrap: balance;

  font-size: 1rem;

  ${mediaQueries.tablet} {
    font-size: 1.125rem;
    max-width: 36rem;
  }

  ${mediaQueries.desktop} {
    font-size: 1.125rem;
    max-width: 40rem;
  }
`;

export const MotionSectionDescription = styled(motion.p)`
  color: var(--muted-foreground);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;
  line-height: 1.6;
  max-width: 28rem;
  text-wrap: balance;

  font-size: 1rem;

  ${mediaQueries.tablet} {
    font-size: 1.125rem;
    max-width: 36rem;
  }

  ${mediaQueries.desktop} {
    font-size: 1.125rem;
    max-width: 40rem;
  }
`;
