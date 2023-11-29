import React from 'react';
import { render, waitFor } from '@testing-library/react';
import axios from 'axios';
import ChatShare from './ChatShare';
import apiSetting from '../../store/APISetting';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('ChatShare', () => {
  it('renders without crashing', () => {
    render(<ChatShare />);
  });

  it('makes a request to the expected API endpoint', async () => {
    const uuidFromUrl = 'test-uuid';
    window.history.pushState({}, '', `?uuid=${uuidFromUrl}`);

    const data = {
      chatConfig: {},
      chatName: 'Test Chat',
      data: {},
      updateDate: new Date(),
    };

    mockedAxios.get.mockResolvedValueOnce({ data: { data } });

    render(<ChatShare />);

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith(`${apiSetting.sharingUrl}/${uuidFromUrl}`, {
        method: 'get',
      });
    });
  });
});