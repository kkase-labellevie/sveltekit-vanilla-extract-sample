import { style, keyframes } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

// グラデーションアニメーション（背景）
const gradientAnimation = keyframes({
  '0%': { backgroundPosition: '0% 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  '100%': { backgroundPosition: '0% 50%' },
})

// ボーダーの点滅
const borderPulse = keyframes({
  '0%': { borderColor: '#FFD700' },
  '50%': { borderColor: '#FF00FF' },
  '100%': { borderColor: '#FFD700' },
})

export const overlay = style({
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(6px)',
  animation: 'fadeIn 0.3s ease-out',
})

export const modal = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '720px',
  width: '100%',
  padding: '1rem',
})

export const modalContent = recipe({
  base: {
    background: 'linear-gradient(135deg, #FF6347, #FFD700, #FF00FF)',
    backgroundSize: '600% 600%',
    animation: `${gradientAnimation} 6s ease infinite`,
    borderRadius: '1.5rem',
    padding: '3rem',
    maxWidth: '700px',
    width: '95%',
    boxShadow: '0 0 20px 10px rgba(255, 105, 180, 0.4)',
    border: '4px solid #FFD700',
    animationName: [gradientAnimation, borderPulse],
    animationDuration: '6s, 1.5s',
    animationIterationCount: 'infinite, infinite',
    animationTimingFunction: 'ease, ease-in-out',
    transform: 'scale(1.1) rotate(0.3deg)',
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '2px 2px 6px rgba(0,0,0,0.5)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    ':hover': {
      transform: 'scale(1.15) rotate(0deg)',
      boxShadow: '0 0 30px 15px rgba(255, 255, 255, 0.6)',
    },
  },
})
