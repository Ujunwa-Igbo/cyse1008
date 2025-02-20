import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { m, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion';
import { textGradient } from 'src/theme/styles';
import { useState } from 'react';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';

import { Iconify } from 'src/components/iconify';
import ActionAreaCard from './custom-component';

import { textGradient } from 'src/theme/styles';

import { ModularExponentiation } from './components/modular-exponentiation';
import { ExtendedEuclideanAlgorithm } from './components/extended-euclidean-algorithm';

const lgKey = 'lg';
export function HomeHeroCYSE1008() {
  const [count, setCount] = useState(0);
  const theme = useTheme();
  return (
  <>
  
<Box
        component="h1"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          ...theme.typography.h2,
          my: 0,
          mx: 'auto',
          maxWidth: 680,
          fontFamily: theme.typography.fontSecondaryFamily,
          [theme.breakpoints.up(lgKey)]: { fontSize: 72, lineHeight: '90px' },
        }}
      >
        <Box component="span" sx={{ width: 1, opacity: 0.24 }}>
          JUELLE EMPIRE
        </Box>
        Simply the BEST
        <Box
          component={m.span}
          animate={{ backgroundPosition: '200% center' }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          sx={{
            ...textGradient(
              `300deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.warning.main} 25%, ${theme.vars.palette.primary.main} 50%, ${theme.vars.palette.warning.main} 75%, ${theme.vars.palette.primary.main} 100%`
            ),
            backgroundSize: '400%',
            ml: { xs: 0.75, md: 1, xl: 1.5 },
          }}
        >
          BRAND
        </Box>
      </Box>

      <Button variant="contained" color="primary" onClick={() => setCount(count + 1)}>
      Click Me {count}
    </Button>
      <Button
            component={RouterLink}
            href={paths.dashboard.root}
            color="inherit"
            size="large"
            variant="contained"
            startIcon={<Iconify width={24} icon="iconoir:flash" />}
          >
            <span>
              View Products and Services
              <Box
                component="small"
                sx={{
                  mt: '-3px',
                  opacity: 0.64,
                  display: 'flex',
                  fontSize: theme.typography.pxToRem(10),
                  fontWeight: theme.typography.fontWeightMedium,
                }}
              >
              </Box>
            </span>
          </Button>
          <ActionAreaCard/>
  </>
  );
}