import { Container, Grid, Typography } from '@mui/material';
import moment from 'moment';
import React, { useState } from 'react';
import ApiPaginateSearch from 'src/components/api-paginate-table/ApiPaginateSearch';
import { TableColumn } from 'src/components/api-paginate-table/types';
import { useSettingsContext } from 'src/components/settings';
import Refresh from 'src/hocs/Refresh';
import { Apiendpoints } from 'src/utils/Apiendpoints';
import { ClientInterface } from 'src/@types/clients';
import ClientMenuPopover from 'src/components/clients/menu-popover/ClientMenuPopover';
import ClientActivateSwitch from './ClientActivateSwitch';

let refresh: () => void;
const ClientsTable = () => {
  const [query, setQuery] = useState('');
  const [apiData, setApiData] = useState([]);
  const { themeStretch } = useSettingsContext();

  const columns: TableColumn<ClientInterface>[] = [
    {
      name: 'Created at',
      cell: (row) => (
        <>
          {moment(row?.createdAt).format('DD-MM-YYYY')} <br />
          {moment(row?.createdAt).format('HH:mm:ss')}
        </>
      ),
    },
    {
      name: 'Name',
      cell: (row) => (
        <Typography variant="caption">
          {row?.firstName} {row?.lastName}
        </Typography>
      ),
    },
    {
      name: 'Email',
      cell: (row) => <Typography variant="caption">{row?.username}</Typography>,
    },
    {
      name: 'Company',
      cell: (row) => <Typography variant="caption">{row?.companyName}</Typography>,
    },
    {
      name: 'Company Address',
      cell: (row) => <Typography variant="caption">{row?.companyAddress}</Typography>,
    },
    {
      name: 'GST',
      cell: (row) => <Typography variant="caption">{row?.companyGst}</Typography>,
    },
    {
      name: 'Status',
      cell: (row) => (
        <ClientActivateSwitch
          getData={() => refresh()}
          username={row.username}
          status={row.status} tpin={undefined}        />
      ),
    },
    {
      name: 'Action',
      cell: (row) => <ClientMenuPopover row={row} />,
    },
  ];

  return (
    <Container maxWidth={themeStretch ? false : 'lg'}>
      <Grid container>
        <Grid item sm={12} xs={12} lg={12}>
          <ApiPaginateSearch
            actionButtons={
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
               <Refresh refresh={() => Promise.resolve(refresh())} />
              </div>
            }
            apiEnd={Apiendpoints.GETCLIENT}
            columns={columns}
            apiData={apiData}
            queryParam={query}
            setQuery={setQuery}
            setApiData={setApiData}
            returnRefetch={(ref: any) => {
              refresh = ref;
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClientsTable;
