import PropTypes from 'prop-types';
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Avatar, Card, CardContent, Stack, SvgIcon, Typography } from '@mui/material';

export const OverviewBudget = (props) => {
  const { difference, positive = false, sx, value } = props;

  return (
    <Card sx={sx}>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 100,
              width: 100
            }}
          >
            <SvgIcon>
              <svg
     
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        fillRule="evenodd"
        d="M12 2.75a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12zM12 5.25a.75.75 0 01.75.75v.317c1.63.292 3 1.517 3 3.183a.75.75 0 01-1.5 0c0-.678-.564-1.397-1.5-1.653v3.47c1.63.292 3 1.517 3 3.183s-1.37 2.891-3 3.183V18a.75.75 0 01-1.5 0v-.317c-1.63-.292-3-1.517-3-3.183a.75.75 0 011.5 0c0 .678.564 1.397 1.5 1.652v-3.469c-1.63-.292-3-1.517-3-3.183s1.37-2.891 3-3.183V6a.75.75 0 01.75-.75zm-.75 2.597c-.936.256-1.5.975-1.5 1.653s.564 1.397 1.5 1.652V7.848zm1.5 5v3.306c.936-.256 1.5-.974 1.5-1.653 0-.678-.564-1.397-1.5-1.652z"
        clipRule="evenodd"
      ></path>
    </svg>

            </SvgIcon>
          </Avatar>
          <Stack spacing={1}>
            <Typography
              color="text.secondary"
              variant="overline"
            >
              Budget
            </Typography>
            <Typography variant="h4">
              {value}
            </Typography>
            {difference && (
          <Stack
            alignItems="center"
            direction="row"
            spacing={2}
            sx={{ mt: 2 }}
          >
            <Stack
              alignItems="center"
              direction="row"
              spacing={0.5}
            >
              <SvgIcon
                color={positive ? 'success' : 'error'}
                fontSize="small"
              >
                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography
                color={positive ? 'success.main' : 'error.main'}
                variant="body2"
              >
                {difference}%
              </Typography>
            </Stack>
            <Typography
              color="text.secondary"
              variant="caption"
            >
              this month
            </Typography>
          </Stack>
        )}
          </Stack>
          
        </Stack>
       
      </CardContent>
    </Card>
  );
};

OverviewBudget.prototypes = {
  difference: PropTypes.number,
  positive: PropTypes.bool,
  sx: PropTypes.object,
  value: PropTypes.string.isRequired
};
