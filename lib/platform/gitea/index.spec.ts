  CommitFilesConfig,
  File,
        labels: mockLabels.map((l) => l.name),
        labels: mockLabels.map((l) => l.id),
      const mockIssue = mockIssues.find((i) => i.title === 'open-issue');
      const mockIssue = mockIssues.find((i) => i.title === 'closed-issue');
      const closedIssue = mockIssues.find((i) => i.title === 'closed-issue');
      const closedIssue = mockIssues.find((i) => i.title === 'closed-issue');
      const closedIssue = mockIssues.find((i) => i.title === 'closed-issue');
      const duplicates = mockIssues.filter(
        (i) => i.title === 'duplicate-issue'
      );